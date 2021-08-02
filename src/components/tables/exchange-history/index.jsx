import React from 'react';
import Table from '../history';
import { formatDate } from '../../../helpers/formatDate';

function ExchangeHistoryTable({ history = [] }) {
  const [rows, setRows] = React.useState([]);
  const columns = ['Date', 'Exchange Rate'];

  React.useEffect(() => {
    const tableRows = [];
    history.forEach((e) => {
      tableRows.push([e.date, formatDate(e.date), e.exchangeRate]);
    });

    setRows(tableRows);
  }, [history]);

  return (
    <Table rows={rows} columns={columns} haveAction={false} />
  );
}

export default ExchangeHistoryTable;
