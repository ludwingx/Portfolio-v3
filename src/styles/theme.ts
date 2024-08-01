import { createTheme } from '@mui/material/styles';

// Define los colores de tu tema
const theme = createTheme({
  palette: {
    primary: {
      light: '#4dabf5',  // Color más claro
      main: '#2196f3',   // Color principal
      dark: '#1769aa',   // Color más oscuro
      contrastText: '#fff',  // Color del texto sobre el color principal
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
