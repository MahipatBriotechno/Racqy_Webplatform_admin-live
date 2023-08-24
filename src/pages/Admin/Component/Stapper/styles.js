import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(theme => ({


  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    background: '#209CA2'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#B7B7BF'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'absolute'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
}));
