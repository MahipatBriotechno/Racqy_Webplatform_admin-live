import React from 'react'
import { TextField, InputBase, FormControl, InputLabel, Input } from '@material-ui/core';
import {
  alpha,
  ThemeProvider,
  withStyles,
  makeStyles,
  createTheme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootStyle: {
    width: '100%',
    marginLeft: '0px',
  }
}))

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
      width: '100%',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#F2F2F2',
    border: 'none',
    fontSize: 16,
    marginTop: '10px',
    marginBottom: '10px',
    padding: '10px 12px',
    marginRight: '10px',

    fontFamily: 'DM Sans',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'DM Sans'
    ].join(','),

  },
}))(InputBase);

function CustomTextField({ placeHolder }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.rootStyle}>
      <BootstrapInput id="bootstrap-input" placeholder={placeHolder} />
    </FormControl>
  )
}

export default CustomTextField