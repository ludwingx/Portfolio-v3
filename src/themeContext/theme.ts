import { createTheme, Theme } from '@mui/material/styles';

export const AppLightTheme: Theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',
    },
    primary: {
      main: '#101010',
      light: '#101010',
      dark: '#ffffff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#202020',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Estilo base para el botón
          textTransform: 'none',
          transition: 'all 0.3s ease', // Transición suave
          border: '1px solid #000000',
        },
        containedPrimary: {
          // Personaliza el estado de hover
          '&:hover': {
            backgroundColor: '#ffffff', // Cambia el color de fondo en hover
            border: '1px solid #000000', // Añade un borde en hover
            color: '#000000', // Cambia el color del texto en hover
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',  // Añade una sombra en hover

          },
        },
      },
    },
  },
});

export const AppDarkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#272727',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Estilo base para el botón
          textTransform: 'none',
          transition: 'all 0.3s ease', // Transición suave
          border: '1px solid #ffffff',
        },
        containedPrimary: {
          // Personaliza el estado de hover
          '&:hover': {
            backgroundColor: '#272727', // Cambia el color de fondo en hover
            color: '#ffffff', // Cambia el color del texto en hover
            border: '1px solid #ffffff', // Añade un borde en hover
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)', // Añade una sombra en hover

          },
        },
      },
    },
  },
});
