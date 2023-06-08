// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middlewares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

// const composeEnhancer =
//     (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

// export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const store = configureStore({
    reducer: rootReducer,
});

// export const persistor = persistStore(store);
