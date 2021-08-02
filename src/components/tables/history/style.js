import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: 'flex',
    '& > a, span': {
      display: 'flex',
      columnGap: 3,
      fontSize: 13,
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  view: {
    color: theme.palette.primary.main,
    marginRight: 20,
  },
  delete: {
    color: theme.palette.text.hint,
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
