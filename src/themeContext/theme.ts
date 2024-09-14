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
    warning: {
      main: '#ed6c02',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightMedium: 500,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: ' #001c55',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: ' #000000',
            color: '#ffffff',
          }
        },
      }
    },
    MuiChip:{
      styleOverrides: {
        root: {
          color: '#ffffff',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5', // Color primario en el tema claro
          boxShadow: 'none',
          color: '#101010',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(0, 28, 85, 0.5)', // Sombra azul al hacer hover
          textAlign: "start",
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 28, 85, 0.7)', // Sombra azul más intensa al hacer hover
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
    warning: {
      main: '#ffa256',
    },
    background: {
      default: '#000000',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightMedium: 500,
  },
  components: {
    MuiButton:{
      styleOverrides: {
        root: {
           backgroundColor: ' #001c55',
           color: '#ffffff',
          '&:hover': {
            backgroundColor: ' #ffffff',
            color: '#000000',
            boxShadow: '0 0 15px rgba(0, 28, 85, 0.8)',
          }
        },
      }
    },
    MuiChip:{
      styleOverrides: {
        root: {
          color: '#ffffff',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000 !important', // Coincidir con el background.default
          boxShadow: 'none',
          backgroundImage: 'none',
          color: '#ffffff', // Ajusta el color del texto si es necesario
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '10px',
          transition: 'box-shadow 0.3s ease',
          backgroundColor:  '#000000',
          textAlign: "start",
          boxShadow:  '0 0 15px rgba(0, 28, 85, 0.5)', // Sombra azul al hacer hover
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 28, 85, 0.7)', // Sombra azul más intensa al hacer hover
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {

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
