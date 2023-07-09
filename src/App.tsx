import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Routes from './Routes';
import { useSelector } from 'react-redux';

function App() {
	const { themeType } = useSelector((state: any) => state.theme);
	const darkTheme = createTheme({
		palette: {
			mode: themeType,
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
