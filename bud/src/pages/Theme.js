import { createTheme } from '@mui/material/styles';


const Theme = createTheme({
  palette: {
    primary: {
      main: '#F2E572',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
        primary: '#000000', // set the primary text color
        secondary: '#ffffff', // set the secondary text color
      },
  },
  typography: {
    fontFamily: "Montserrat', sans-serif;",
  }
});

export default Theme;