import authReducer, { setToken, AuthState } from '..';

describe('AuthReducer', () => {
	const state: AuthState = {
		token: null,
	};
	it('it should set token', () => {
		const initialState: AuthState = state;
		const action = setToken('token');
		const expectedState = { ...state, token: 'token' };
		expect(authReducer(initialState, action)).toEqual(expectedState);
	});
});
