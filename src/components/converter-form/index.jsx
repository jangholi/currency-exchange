import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CompareArrows from '@material-ui/icons/CompareArrows';
import Typography from '@material-ui/core/Typography';
import Button from '../atoms/button';
import { exchangeCurrency } from '../../api/currency';
import { useStyles } from './style';
import { getHistory, setHistory } from '../../utils/LocalStorageManagement';

function ConverterForm({ submitHandler, location }) {
  const classes = useStyles();
  const [startAmout, setStartAmout] = React.useState(0);
  const [endAmout, setEndAmout] = React.useState(0);
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [showResult, setShowResult] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const setDataInhistory = () => {
    const history = getHistory('history');
    const newData = {
      from,
      to,
      startAmout: +startAmout,
      endAmout,
      exchangeRate: endAmout === 0 ? '-' : (+startAmout / endAmout),
      date: Date.now(),
    };

    const newHistory = [...history, ...[newData]];

    setHistory(JSON.stringify(newHistory));
  };
  const calcExchangeCurency = () => {
    const params = {
      ids: from,
      interval: '1h',
      convert: to,
    };

    exchangeCurrency(params)
      .then((res) => {
        setDataInhistory();

        setShowResult(true);
        setLoading(false);
        submitHandler();

        const price = res?.data?.[0]?.price;
        setEndAmout(price || 0);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const submitConvert = (e) => {
    setLoading(true);
    e?.preventDefault();
    calcExchangeCurency();
  };

  React.useEffect(() => {
    const state = location?.state;

    if (state) {
      setFrom(state[0]);
      setTo(state[1]);
      setStartAmout(state[2]);
      submitConvert();
    }
  }, [location]);

  const flipCurrency = () => {
    setFrom(to);
    setTo(from);
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
            loading={loading}
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
