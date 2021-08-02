import React from 'react';
import Table from '../history';
import { formatDate } from '../../../helpers/formatDate';

function ConversionHistoryTable({ history = [], updateHistory }) {
  const [rows, setRows] = React.useState([]);
  const columns = ['Date', 'Event', ''];

  const createTableRows = () => {
    const tableRows = [];

    history.forEach((e) => {
      tableRows.push([e.date, formatDate(e.date, true), [e.from, e.to, e.startAmout, e.endAmout]]);
    });

    setRows(tableRows);
  };

  React.useEffect(() => {
    createTableRows();
  }, [history]);

  const rowsUpdate = () => {
    updateHistory();
  };

  return (
    <Table rows={rows} columns={columns} rowsUpdate={rowsUpdate} haveAction />
  );
}

export default ConversionHistoryTable;
