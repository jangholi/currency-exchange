import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './header';

function defaultLayout({ children }) {
  return (
    <Grid container>
      <Header />
      {children}
    </Grid>
  );
}

export default defaultLayout;
