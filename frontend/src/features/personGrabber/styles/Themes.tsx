import { createTheme } from '@mui/material/styles'


export const mainTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a7d5fa"
    }
  },
  typography: {
    fontSize: 15,
  }
});

export const navbarTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#63D471"
    }
  },
  typography: {
    fontSize: 15
  }
})

