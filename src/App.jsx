import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  Typography,
} from '@mui/material';
import Navbar from './components/Navbar';
import { useState } from 'react';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState(false);

  return (
    <ThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar
        isDarkThemeActive={isDarkThemeActive}
        setIsDarkThemeActive={setIsDarkThemeActive}
      />

      <Typography
        variant="h4"
        sx={(theme) => ({
          py: '50px',
          textAlign: 'center',
          color: theme.palette.mode === 'light' ? '#121212' : '#fff',
        })}
      >
        Dark theme toggle example
      </Typography>
    </ThemeProvider>
  );
}

export default App;
