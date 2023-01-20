import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography, Paper } from '@mui/material';
import Comment from './Comment';



const theme = createTheme({
  palette: {
    main: {
      moderateBlue: 'hsl(238, 40%, 52%)',
      softRed: 'hsl(358, 79%, 66%)',
      lightGrayishBlue: 'hsl(239, 57%, 85%)',
      paleRed: 'hsl(357, 100%, 86%)',
    },
    neutral: {
      darkBlue: 'hsl(212, 24%, 26%)',
      grayishBlue: 'hsl(211, 10%, 45%)',
      lightGray: 'hsl(223, 19%, 93%)',
      veryLightGray: 'hsl(228, 33%, 97%)',
      white: 'hsl(0, 0%, 100%)'
    }
  },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper sx={{backgroundColor: 'neutral.veryLightGray', py: '20px', px: '20px'}}>
          <Comment sx={{ my: '20px'}}/>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
