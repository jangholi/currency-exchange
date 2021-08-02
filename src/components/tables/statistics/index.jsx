import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell } from './style';

export default function BasicTable({ history }) {
  const [rows, setRows] = useState([]);

  const createTableRow = () => {
    let min = 0;
    let max = 0;
    let sum = 0;
    history.forEach((e) => {
      if (e.exchangeRate !== '-') {
        min = min < e.exchangeRate ? min : e.exchangeRate;
        max = max > e.exchangeRate ? max : e.exchangeRate;
        sum += e.exchangeRate;
      }
    });

    const avg = history.length === 0 ? '-' : sum / history.length;

    setRows([
      ['Lowest', min],
      ['Highest', max],
      ['Average', avg.toFixed(6)],
    ]);
  };

  React.useEffect(() => {
    createTableRow();
  }, [history]);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>statistic</StyledTableCell>
            <StyledTableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[0]}
            >
              <StyledTableCell component="th" scope="row">
                {row[0]}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row[1]}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
