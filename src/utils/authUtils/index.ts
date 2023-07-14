import store from '@store/index';
import { setToken } from '@store/reducers/authReducer';

export const makeUserLoggedIn = () => {
	store.dispatch(setToken(Math.random().toString()));
};

export const makeUserLoggedOut = () => {
	store.dispatch(setToken(null));
};
