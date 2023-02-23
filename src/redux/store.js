import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filterSlice';

import { authApi } from './authSlice';
import { contactApi } from './contact.slice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        filter: filterSlice.reducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(contactApi.middleware)
            .concat(authApi.middleware),
});

setupListeners(store.dispatch);
