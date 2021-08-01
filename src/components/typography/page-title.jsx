import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
}));

function PageTitle({ children }) {
  const classes = useStyles();

  return (
    <Grid item md={12}>
      <Typography component="h2" className={classes.root}>
        {children}
      </Typography>
    </Grid>
  );
}

export default PageTitle;
