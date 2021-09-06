import axios from 'axios';
import { actionTypes } from '../store/reducer';

export const getRequest = async (args) => {
    const { url, dispatch, actionType, showSpinner = true } = args;

    try {
        if (showSpinner) dispatch({ type: actionTypes.SET_SHOW_SPINNER, payload: true });
        const response = await axios.get(url, { withCredentials: true });
        dispatch({ type: actionType, payload: response.data });
        if (showSpinner) dispatch({ type: actionTypes.SET_SHOW_SPINNER, payload: false });
    } catch (error) {
        if (showSpinner) dispatch({ type: actionTypes.SET_SHOW_SPINNER, payload: false });
        document.cookie = 'userId=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        dispatch({ type: actionTypes.STORE_USER_ID, payload: '' });
        console.log(error);
    }
};
