import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '../../components/tabs';
import Button from '../../components/atoms/button';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingRight: '10%',
    paddingLeft: '10%',
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
      <Grid item className={classes.buttonContainer} md={2} xs={12}>
        <Button>
          LOGOUT
        </Button>
      </Grid>
    </Grid>
  );
}

export default Header;
