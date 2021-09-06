import { CssBaseline } from '@material-ui/core';
import { useContext, useEffect, useReducer } from 'react';
import { getRequest } from './api/api';
import { AppWrapepr, ContentWrapper, RefreshText } from './App.styles';
import NotificationsList from './components/notificationsList/NotificationsList';
import Spinner from './components/spinner/Spinner';
import { urls } from './constants/urls';
import Context from './store/context';
import reducer, { actionTypes } from './store/reducer';
import useGetUserId from './tools/useGetUserId';

const App = () => {
    const initialState = useContext(Context);
    const [state, dispatch] = useReducer(reducer, initialState);

    const { userId, showSpinner, notifications } = state;
    useGetUserId(dispatch, userId);

    useEffect(() => {
        if (userId) {
            getRequest({ url: `${urls.GET_USER_NOTIFICATIONS}${userId}`, dispatch, actionType: actionTypes.STORE_NOTIFICATIONS });
        }
    }, [userId]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (userId) {
                getRequest({ url: `${urls.GET_USER_NOTIFICATIONS}${userId}`, dispatch, actionType: actionTypes.STORE_NOTIFICATIONS });
            }
        }, 30000);

        return () => clearInterval(interval);
    }, [userId]);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <AppWrapepr>
                <CssBaseline />
                {showSpinner && <Spinner />}
                <ContentWrapper>
                    <RefreshText>Auto-refresh every 30 seconds</RefreshText>
                    {notifications.length > 0 && <NotificationsList />}
                </ContentWrapper>
            </AppWrapepr>
        </Context.Provider>
    );
};

export default App;
