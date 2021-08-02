import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  tableContainer: {
    '& > div': {
      padding: '7px',
    },
  },
  resultContainer: {
    '& > div': {
      padding: '7px',
    },
  },
  hr: {
    margin: '40px 7px',
  },
}));
