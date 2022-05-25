import { createTheme } from '@mui/material/styles';

// import { green} from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#222222'
    }
  },
  typography: {
    fontFamily: ['Work Sans', 'sans-serif'].join(','),
    h1: {
      fontWeight: 200
    },
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 500
    },
    body1: {
      fontWeight: 400
    }
  }
});
