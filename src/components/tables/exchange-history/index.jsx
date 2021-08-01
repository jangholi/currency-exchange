import React from 'react';
import Table from '../history';
import { formatDate } from '../../../helpers/formatDate';

function ExchangeHistoryTable() {
  const [rows, setRows] = React.useState([]);
  const columns = ['Date', 'Exchange Rate'];

  React.useEffect(() => {
    const history = localStorage.getItem('changeHistory');
    const parseHistory = history ? JSON.parse(history) : [];

    const tableRows = [...rows];
    parseHistory.forEach((e) => {
      tableRows.push([formatDate(e.date), e.exchangeRate]);
    });

    setRows(tableRows);
  }, []);

  return (
    <Table rows={rows} columns={columns} haveAction={false} />
  );
}

export default ExchangeHistoryTable;
