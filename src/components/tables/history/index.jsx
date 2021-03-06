import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import { useStyles, StyledTableCell } from './style';
import { getHistory, setHistory } from '../../../utils/LocalStorageManagement';

export default function BasicTable({
  rows, columns, haveAction, rowsUpdate,
}) {
  const classes = useStyles();
  const [showAction, setShowAction] = useState(false);
  const [index, setIndex] = useState(null);

  const deleteItemFromHistory = (e, i) => {
    const history = getHistory();
    history.splice(i, 1);
    setHistory(JSON.stringify(history));
    rowsUpdate();
  };

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
                {row[1]}
              </StyledTableCell>
              <StyledTableCell>
                {
                  Array.isArray(row[2])
                    ? `Converted an amount of ${row?.[2]?.[2]} from ${row?.[2]?.[0]} to ${row?.[2]?.[1]}`
                    : row[2]
                }
              </StyledTableCell>
              {haveAction && (
                <StyledTableCell hidden>
                  {(showAction && index === i) && (
                    <div className={classes.iconContainer}>
                      <Link
                        to={{
                          pathname: 'currency-converter',
                          state: row[2],
                        }}
                        className={classes.view}
                      >
                        <RemoveRedEyeIcon fontSize="small" className={classes.icon} />
                        View
                      </Link>
                      <span
                        role="button"
                        className={classes.delete}
                        onClick={(e) => deleteItemFromHistory(e, i)}
                        onKeyUp={(e) => deleteItemFromHistory(e, i)}
                        tabIndex={i}
                      >
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
