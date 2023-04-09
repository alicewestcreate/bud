import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
  palette: {
    primary: {
      main: '#F2E572',
    },
    secondary: {
      main: '#FE267B',
    },
    text: {
        primary: '#000000', // set the primary text color
        secondary: '#ffffff', // set the secondary text color
      },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    '@import': 'url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap")',
    body1: {
      fontSize: '1.2rem', // custom font size for body1 variant
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
    },
  }
});

export default Theme;