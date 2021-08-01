import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'flex',
  },
  view: {
    color: theme.palette.primary.main,
    marginRight: 20,
    display: 'flex',
    columnGap: 3,
    fontSize: 13,
    cursor: 'pointer',
  },
  delete: {
    color: theme.palette.text.hint,
    display: 'flex',
    columnGap: 3,
    fontSize: 13,
    cursor: 'pointer',
  },
  icon: {
    fontSize: 15,
  },
}));

export const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.text.secondary,
    fontWeight: 600,
    width: '33%',
  },
  body: {
    fontWeight: 600,
  },
}))(TableCell);
