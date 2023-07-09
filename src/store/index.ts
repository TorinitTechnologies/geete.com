import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import themeReducer from './reducers/themeReducer';
import authReducer from './reducers/authReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const themePersistedReducer = persistReducer(persistConfig, themeReducer);

const store = configureStore({
	reducer: {
		theme: themePersistedReducer,
		auth: persistedReducer,
	},
});

export default store;
export const persistor = persistStore(store);
