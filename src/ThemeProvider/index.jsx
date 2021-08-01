import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#94c720',
    },
    text: {
      primary: '#404040',
      secondary: '#8D8D8D',
      hint: '#C70D38',
    },
  },
});

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
      backgroundColor: 'lightgray',
      fontFamily: 'Roboto-regular',
      fontSize: '16px',
    },
  },
});

function Theme({ children }) {
  useGlobalStyles();
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
