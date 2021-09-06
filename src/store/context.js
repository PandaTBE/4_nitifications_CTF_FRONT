import { createContext } from 'react';

const Context = createContext({
    userId: '',
    showSpinner: false,
    notifications: [],
});

export default Context;
