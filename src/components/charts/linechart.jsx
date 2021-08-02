import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useStyles } from './style';

function Linechart({ history }) {
  const classes = useStyles();
  const [options, setOption] = React.useState({});

  const createOption = (data) => ({
    title: {
      text: '',
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      formatter() {
        // eslint-disable-next-line react/no-this-in-sfc
        return `Exchange Rate: ${this.point.y}`;
      },
    },
    xAxis: {
      type: 'category',
      tickInterval: 1,
      labels: {
        formatter() {
          // eslint-disable-next-line react/no-this-in-sfc
          return Highcharts.dateFormat('%e/%b/%Y', this.value);
        },
      },
    },
    series: [{
      name: '',
      showInLegend: false,
      color: 'green',
      data,
    }],
  });

  React.useEffect(() => {
    const data = history.map((e) => ({
      name: e.date,
      y: e.exchangeRate === '-' ? 0 : e.exchangeRate,
    }));

    setOption(createOption(data || []));
  }, [history]);

  return (
    <div className={classes.root}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default Linechart;
