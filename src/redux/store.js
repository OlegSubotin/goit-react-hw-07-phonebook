import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { contactsApi } from "./contacts/contactSlice";


export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        contactsApi.middleware,
    ],
    devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);











// import { configureStore, getDefaultMiddleware, } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
// import {
//     // persistStore,
//     // persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// // import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contacts/contacts-reducer';

// const middleware = [
//     ...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
//         }
//     }),
//     logger
// ];

// // const contactsPersistConfig = {
// //     key: 'contacts',
// //     storage,
// //     blacklist: ['filter'],
// // };

// export const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//     },
//     middleware,
//     devTools: process.env.NODE_ENV === 'development',
// });

// // export const persistor = persistStore(store);