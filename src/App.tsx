import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Input from '@atoms/Input';
import Button from '@atoms/Button';

function App() {
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Button
				title={'Button'}
				text={'Button'}
				variant={'contained'}
				dataTestId={'button'}
				id={'btn'}
				name={'btn'}
			/>
			<Input
				id={'input'}
				name={'input'}
				label={'Input'}
				variant={'outlined'}
				dataTestId={'input'}
				type={'password'}
				inputProps={{ 'aria-label': 'password' }}
			/>
		</ThemeProvider>
	);
}

export default App;
