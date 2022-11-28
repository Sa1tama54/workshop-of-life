import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: '#AC0000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: '#AC0000',
          textTransform: 'none',
          fontWeight: 500,

          '&:hover': {
            background: '#AC0000',
          },

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

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiCardActionArea: {
      styleOverrides: {
        root: {
          cursor: 'default',
        },
      },
    },
  },
});
