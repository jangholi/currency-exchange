import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '../../components/tabs';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: '0 10px',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

function Header() {
  const classes = useStyles();
  const tabData = [
    {
      label: 'currency exchange',
      value: '/',
    }, {
      label: 'currency converter',
      value: '/currency-converter',
    }, {
      label: 'view conversion history',
      value: '/conversion-history',
    },
  ];

  return (
    <Grid
      container
      className={classes.root}
    >
      <Grid item md={10} xs={12}>
        <Tabs data={tabData} />
      </Grid>
      <Grid className={classes.buttonContainer} item md={2} xs={12}>
        <Button color="primary">
          LOGOUT
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
