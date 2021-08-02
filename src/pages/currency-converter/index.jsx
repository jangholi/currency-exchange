import React from 'react';
import { Box, Grid } from '@material-ui/core';
import PageTitle from '../../components/typography/page-title';
import SectionTitle from '../../components/typography/section-title';
import ExchangeTable from '../../components/tables/exchange-history';
import ConverterForm from '../../components/converter-form';
import Linechart from '../../components/charts/linechart';
import { useStyles } from './style';
import { filterLocalStorageByDate } from '../../helpers/filterLocalStorageByDate';
import Select from '../../components/atoms/select';
import RadioButton from '../../components/atoms/radio-group';
import StatisticChart from '../../components/tables/statistics';

function CurrencyConverter({ location }) {
  const classes = useStyles();
  const [history, setHistory] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [showChart, setShowChart] = React.useState(false);
  const selectOption = [
    {
      value: '7 days',
      key: 7,
    }, {
      value: '14 days',
      key: 14,
    }, {
      value: '30 days',
      key: 30,
    },
  ];
  const radioOption = [
    {
      value: 'table',
      label: 'Table',
    }, {
      value: 'chart',
      label: 'Chart',
    },
  ];
  const [day, setDay] = React.useState(7);

  const filterHistory = (val) => {
    const filteredHistory = filterLocalStorageByDate(val);
    setHistory(filteredHistory);
  };

  React.useEffect(() => {
    filterHistory(day);
  }, []);

  const submitConverterForm = () => {
    filterHistory(day);
    setShowResult(true);
  };

  const changeDuration = (value) => {
    filterHistory(value);
    setDay(value);
  };

  const changeRadio = (val) => {
    if (val === 'chart') {
      setShowChart(true);
    } else {
      setShowChart(false);
    }
  };

  return (
    <Grid item sm={12}>

      {/* title */}
      <Box mb={5}>
        <PageTitle>
          I want to convert
        </PageTitle>
      </Box>

      {/* Converter Form */}
      <Box mb={5}>
        <ConverterForm submitHandler={submitConverterForm} location={location} />
      </Box>

      {/* result (contain table and chart) */}
      <hr className={classes.hr} />
      <Box mb={5} hidden={!showResult}>
        <Box mb={2} className={classes.resultContainer}>
          <SectionTitle>
            Exchange History
          </SectionTitle>
        </Box>
        <Grid container className={classes.resultContainer}>
          <Grid item md={3} sm={6}>
            <Select options={selectOption} initialValue={day} changeHandler={changeDuration} />
          </Grid>
          <Grid item md={3} sm={6}>
            <RadioButton options={radioOption} initialValue="table" changeHandler={changeRadio} />
          </Grid>
        </Grid>
        <Grid container className={classes.tableContainer}>
          <Grid item md={6} sm={12} hidden={showChart}>
            <ExchangeTable history={history} />
          </Grid>
          <Grid item md={6} sm={12} hidden={!showChart}>
            <Linechart history={history} />
          </Grid>
          <Grid item md={6} sm={12}>
            <StatisticChart history={history} />
          </Grid>
        </Grid>
      </Box>

    </Grid>
  );
}

export default CurrencyConverter;
