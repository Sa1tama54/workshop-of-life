/* eslint-disable @typescript-eslint/no-explicit-any */
import { defaultTheme } from 'react-admin';

export const lightTheme: any = {
  ...defaultTheme,
  components: {
    ...defaultTheme.components,
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#ac0000',

          '&:hover': {
            backgroundColor: '#c90000',
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          a: {
            color: '#ac0000',
          },
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          '&.RaMenuItemLink-active': {
            color: '#fff',
            backgroundColor: '#ac0000',

            '& .RaMenuItemLink-icon': {
              color: '#fff !important',
            },
          },
        },
      },
    },
    RaAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ac0000 !important',
        },
      },
    },
    RaDatagrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'Lavender',
          '& .RaDatagrid-headerCell': {
            backgroundColor: 'MistyRose',
          },
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          '& .RaSidebar-fixed': {
            height: '100%',
          },

          '& .MuiPaper-root': {
            height: '100%',
          },
        },
      },
    },
  },
};

export const darkTheme: any = {
  ...defaultTheme,
  palette: {
    mode: 'dark',
  },
  components: {
    ...defaultTheme.components,
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#242424 !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#ac0000',

          '&:hover': {
            backgroundColor: '#c90000',
          },
          color: '#fff',
        },
      },
    },
    RaAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ac0000 !important',
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          '&.RaMenuItemLink-active': {
            backgroundColor: '#ac0000',
          },
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          '& .RaSidebar-fixed': {
            height: '100%',
          },

          '& .MuiPaper-root': {
            height: '100%',
          },
        },
      },
    },
  },
};
