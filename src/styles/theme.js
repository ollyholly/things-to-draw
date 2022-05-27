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
      fontWeight: 200,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      }
    },
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 500,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      }
    },
    body1: {
      fontWeight: 400
    }
  }
});
