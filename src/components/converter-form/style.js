import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > button': {
      width: 'auto',
      marginTop: '-40px',
    },
  },
  arrow: {
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    width: '20px',
    padding: '5px 9px',
    marginTop: '23px',
    cursor: 'pointer',
  },
  result: {
    fontSize: '1.7rem',
    textAlign: 'center',
    marginTop: '33px',
    fontWeight: '100',
    marginBottom: '20px',
  },
  secondaryColor: {
    color: theme.palette.secondary.main,
    fontWeight: '700',
  },
  resultDetail: {
    color: theme.palette.text.secondary.main,
    fontWeight: '100',
    textAlign: 'center',
  },
}));
