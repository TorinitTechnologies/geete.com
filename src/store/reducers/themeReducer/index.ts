import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: ThemeState = {
	themeType: 'dark',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ThemeType>) => {
			state.themeType = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
