import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contactsApi } from "./contacts/contactSlice";
import { filter } from './contacts/contacts-reducer';

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter:filter,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
    devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);