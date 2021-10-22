import * as React from 'react';
import { createTheme } from '@mui/material/styles'


export const whiteTheme = createTheme({

  palette: {
    text: {
      primary: "white",
    }
  }
});


export const paginationTheme = createTheme({
  palette: {
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },

  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "white",

        },
      },
    },
  },
});


export const textfieldTheme = createTheme({
  components: {

    MuiTextField: {
      styleOverrides: {
        
        root: {
          color: "white",
          
          input: {
            color: "white",

          }
        },
      },
    },
  },
});

















