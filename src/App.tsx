import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from './shared/atoms/Button'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
       <Button
        text='Button'
        title='Button'
        variant='outlined'
      />
    </ThemeProvider>
  );
}

export default App;
