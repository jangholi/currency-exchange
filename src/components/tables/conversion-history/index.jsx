import React from 'react';
import Table from '../history';
import { formatDate } from '../../../helpers/formatDate';

function ConversionHistoryTable() {
  const [rows, setRows] = React.useState([]);
  const columns = ['Date', 'Event', ''];

  React.useEffect(() => {
    const history = localStorage.getItem('changeHistory');
    const parseHistory = history ? JSON.parse(history) : [];
    const tableRows = [...rows];

    parseHistory.forEach((e) => {
      tableRows.push([formatDate(e.date, true), [e.from, e.to, e.startAmout, e.endAmout]]);
    });

    setRows(tableRows);
  }, []);

  return (
    <Table rows={rows} columns={columns} haveAction />
  );
}

export default ConversionHistoryTable;
