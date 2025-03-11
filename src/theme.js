import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4D3E', // Dark green
      light: '#2C7A64',
      dark: '#0B2318',
      contrastText: '#FFFFF0', // Ivory
    },
    secondary: {
      main: '#FFD700', // Yellow
      light: '#FFE44D',
      dark: '#B39700',
      contrastText: '#000000',
    },
    background: {
      default: '#FFFFF0', // Ivory
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1B4D3E',
      secondary: '#2C7A64',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
      color: '#1B4D3E',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#1B4D3E',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#1B4D3E',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1B4D3E',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme; 