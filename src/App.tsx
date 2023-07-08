import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@atoms/Button'
import BasicCard from '@atoms/Card';
 

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
        text='Button'
        title='Button'
        variant='outlined'
      />
      <BasicCard/>
    </ThemeProvider>
  );
}

export default App;
