import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: 'linear-gradient(91.24deg, #AC0000 1.59%, #EA6262 98.14%)',
          boxShadow: '0px 4px 12px rgba(55, 81, 255, 0.24)',

          '&:disabled': {
            background: 'rgba(0,0,0,.2)',
          },
        },

        root: {
          borderRadius: '8px',
          fontWeight: 600,
          transition: 'none',
        },
      },
    },
  },
});
