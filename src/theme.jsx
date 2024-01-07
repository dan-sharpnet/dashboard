import { createTheme } from '@mui/material/styles';

const theme = createTheme({  
    palette: {
    type: 'light',
    primary: {
      main: '#39375b',
    },
    secondary: {
      main: '#c14953',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
          borderRadius: '12px',
        },
      },
    },
  },
});

export default theme