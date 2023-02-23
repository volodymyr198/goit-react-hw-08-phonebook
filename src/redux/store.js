import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { filterSlice } from './filterSlice';
import { userApi } from './userApi';
import { contactApi } from './contactsSlice';
import { persistedReducer } from './authSlice';
// import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        filter: filterSlice.reducer,
        auth: persistedReducer,
    },

    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
        contactApi.middleware,
        userApi.middleware,
    ],
});

// setupListeners(store.dispatch);
export const persistor = persistStore(store);
