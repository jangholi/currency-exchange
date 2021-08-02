import React from 'react';
import Table from '../history';
import { formatDate } from '../../../helpers/formatDate';

function ConversionHistoryTable({ history = [] }) {
  const [rows, setRows] = React.useState([]);
  const columns = ['Date', 'Event', ''];

  React.useEffect(() => {
    const tableRows = [];

    history.forEach((e) => {
      tableRows.push([e.date, formatDate(e.date, true), [e.from, e.to, e.startAmout, e.endAmout]]);
    });

    setRows(tableRows);
  }, [history]);

  return (
    <Table rows={rows} columns={columns} haveAction />
  );
}

export default ConversionHistoryTable;
