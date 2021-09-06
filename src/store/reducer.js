import getCookie from '../tools/getCookie';

export const actionTypes = {
    STORE_USER_ID: 'STORE_USER_ID',
    SET_SHOW_SPINNER: 'SET_SHOW_SPINNER',
    STORE_NOTIFICATIONS: 'STORE_NOTIFICATIONS',
};

const storeUserId = (state, action) => {
    const userId = getCookie('userId');
    if (!userId) document.cookie = `userId=${action.payload}`;
    return {
        ...state,
        userId: action.payload,
    };
};

const setShowSpinner = (state, action) => {
    return {
        ...state,
        showSpinner: action.payload,
    };
};

const storeNotifications = (state, action) => {
    return {
        ...state,
        notifications: action.payload,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.STORE_USER_ID: {
            return storeUserId(state, action);
        }

        case actionTypes.SET_SHOW_SPINNER: {
            return setShowSpinner(state, action);
        }

        case actionTypes.STORE_NOTIFICATIONS: {
            return storeNotifications(state, action);
        }
        default:
            return state;
    }
};

export default reducer;
