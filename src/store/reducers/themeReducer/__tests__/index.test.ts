import themeReducer, { setTheme } from '..';

describe('ThemeReducer', () => {
	const state: ThemeState = {
		themeType: 'dark',
	};
	it('it should set theme', () => {
		const initialState: ThemeState = state;
		const action = setTheme('light');
		const expectedState = { ...state, themeType: 'light' };
		expect(themeReducer(initialState, action)).toEqual(expectedState);
	});
});
