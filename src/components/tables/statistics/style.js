import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

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
