import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Routes from './Routes';

function App() {
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
