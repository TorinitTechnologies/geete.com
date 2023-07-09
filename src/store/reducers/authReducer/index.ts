import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const initialState: AuthState = {
	token: null,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
	},
});

export const { setToken } = themeSlice.actions;

export default themeSlice.reducer;
