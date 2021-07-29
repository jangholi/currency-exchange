import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './header';

const useStyles = makeStyles(() => ({
  layout: {
    flexGrow: 1,
    padding: '30px 10%',
  },
}));

function defaultLayout({ children }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Header />
      <Grid className={classes.layout}>
        {children}
      </Grid>
    </Grid>
  );
}

export default defaultLayout;
