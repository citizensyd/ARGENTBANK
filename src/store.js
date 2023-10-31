import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/login/auth';
import userReducer from './features/user/userSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

/**
 * Configuration for Redux-Persist.
 * 
 * @type {Object}
 */
const persistConfig = {
  key: 'root',
  storage,
};

/**
 * Combined root reducer.
 * 
 * @type {Function}
 */
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
});

/**
 * Persisted root reducer with Redux-Persist configurations.
 * 
 * @type {Function}
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Redux store.
 * 
 * Configured with persisted root reducer and custom middleware settings.
 * 
 * @type {Object}
 */
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

/**
 * Persistor for Redux store.
 * 
 * @type {Object}
 */
export const persistor = persistStore(store);

export default store;
