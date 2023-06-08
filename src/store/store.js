import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

export const persistor = persistStore(store);
