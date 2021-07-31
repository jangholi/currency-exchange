import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    fontSize: '3rem',
    fontWeight: 'bold',
  },
}));

function SectionTitle({ children }) {
  const classes = useStyles();

  return (
    <Grid md={12}>
      <Typography component="h1" className={classes.root}>
        {children}
      </Typography>
    </Grid>
  );
}

export default SectionTitle;
