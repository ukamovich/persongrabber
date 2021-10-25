import { createTheme } from '@mui/material/styles'
import { padding } from '@mui/system';


export const paginationTheme = createTheme({
  palette: {
    secondary: {
      main: '#19D5C6',
      contrastText: 'fff',
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



export const whiteTheme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          background: "white",
        }
      },
    },
  },
});



export const MenuItemTheme = createTheme({
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {

          backgroundColor: "white",

        }

       
       
      },
    },
  },
});




















