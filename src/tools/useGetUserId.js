import { useEffect } from 'react';
import { getRequest } from '../api/api';
import { urls } from '../constants/urls';
import { actionTypes } from '../store/reducer';
import getCookie from './getCookie';

const useGetUserId = (dispatch, userId) => {
    useEffect(() => {
        if (!userId) {
            const userIdFromCoolie = getCookie('userId');

            if (userIdFromCoolie) {
                dispatch({ type: actionTypes.STORE_USER_ID, payload: userIdFromCoolie });
            } else {
                getRequest({ url: urls.GET_USER_ID, dispatch, actionType: actionTypes.STORE_USER_ID });
            }
        }

        // eslint-disable-next-line
    }, [userId]);
};

export default useGetUserId;
