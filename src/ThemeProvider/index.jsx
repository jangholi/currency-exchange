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
  },
});

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
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
