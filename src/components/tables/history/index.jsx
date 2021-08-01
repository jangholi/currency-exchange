import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { useStyles, StyledTableCell } from './style';

export default function BasicTable({ rows, columns, haveAction }) {
  const classes = useStyles();
  const [showAction, setShowAction] = useState(false);
  const [index, setIndex] = useState(null);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((e) => (
              <StyledTableCell key={e}>{e}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row[0]}
              onMouseEnter={() => {
                setIndex(i);
                setShowAction(true);
              }}
              onMouseLeave={() => {
                setShowAction(false);
              }}
            >
              <StyledTableCell component="th" scope="row">
                {row[0]}
              </StyledTableCell>
              <StyledTableCell>{row[1]}</StyledTableCell>
              {haveAction && (
                <StyledTableCell hidden>
                  {(showAction && index === i) && (
                    <div className={classes.iconContainer}>
                      <span className={classes.view}>
                        <RemoveRedEyeIcon fontSize="small" className={classes.icon} />
                        View
                      </span>
                      <span className={classes.delete}>
                        <DeleteForeverIcon className={classes.icon} />
                        Delete from history
                      </span>
                    </div>
                  )}
                </StyledTableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
