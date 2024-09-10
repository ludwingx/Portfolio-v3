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
    warning:{
      main: '#ed6c02',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightMedium: 500,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow: 'none',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.6)', // Sombra iluminada negra al hacer hover
          },
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s ease',
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
    warning:{
      main: '#ffa256',
    },
    background: {
      default: '#000000',
      paper: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightMedium: 500,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow: 'none',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.6)', // Sombra iluminada blanca al hacer hover
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s ease',
        },
      },
    },
  },
});
