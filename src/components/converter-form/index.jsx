import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CompareArrows from '@material-ui/icons/CompareArrows';
import Typography from '@material-ui/core/Typography';
import Button from '../atoms/button';
import { exchangeCurrency } from '../../api/currency';
import { useStyles } from './style';

function ConverterForm() {
  const classes = useStyles();
  const [startAmout, setStartAmout] = React.useState(0);
  const [endAmout, setEndAmout] = React.useState(0);
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [showResult, setShowResult] = React.useState(false);

  const calcExchangeCurency = () => {
    const params = {
      ids: from,
      interval: '1h',
      convert: to,
    };

    exchangeCurrency(params)
      .then((res) => {
        setShowResult(true);
        const price = res?.data?.[0]?.price;
        setEndAmout(price || 0);
      });
  };

  const flipCurrency = () => {
    setFrom(to);
    setTo(from);
  };
  const submitConvert = (e) => {
    e.preventDefault();
    calcExchangeCurency();
  };

  return (
    <>
      <Grid item sm={12}>
        <form className={classes.root}>
          <TextField
            label="Amount"
            type="number"
            value={startAmout}
            onChange={(e) => setStartAmout(e.target.value)}
            required
          />
          <TextField
            label="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
          <CompareArrows className={classes.arrow} onClick={flipCurrency} />
          <TextField
            label="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
          <Button
            clickHandler={submitConvert}
            fill
          >
            CONVERT
          </Button>
        </form>
      </Grid>
      <Grid item sm={12} hidden={!showResult}>
        <Typography component="h2" className={classes.result}>
          {startAmout}
          {' '}
          {from}
          {' '}
          =
          <span className={classes.secondaryColor}>
            {' '}
            {endAmout * startAmout}
            {' '}
            {to}
          </span>
        </Typography>
        <Typography component="h2" className={classes.resultDetail}>
          1
          {' '}
          {from}
          {' '}
          =
          <span>
            {' '}
            {endAmout}
            {' '}
            {to}
          </span>
        </Typography>
        <Typography component="h2" className={classes.resultDetail}>
          1
          {' '}
          {to}
          {' '}
          =
          <span>
            {' '}
            {endAmout ? (1 / endAmout).toFixed(6) : 0}
            {' '}
            {from}
          </span>
        </Typography>
      </Grid>
    </>
  );
}

export default ConverterForm;
