import React from 'react'
import { TextField, InputBase, FormControl, InputLabel } from '@material-ui/core';
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
  },
  labelStyle: {
    color: '#B7B7BF'
  }
}))

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(2),
      width: '100%',
      color: 'black'
    },


  },
  input: {
    borderRadius: 10,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    border: 'none',
    fontSize: 16,
    marginTop: '12px',
    marginBottom: '10px',
    padding: '10px 12px',
    marginRight: '10px',
    margin: '10px',
    marginLeft:4,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'DM Sans'
    ].join(','),

  },
}))(InputBase);

function FormTextField({ placeHolder, label }) {
  const classes = useStyles();
  return (
    <FormControl className={classes.rootStyle}>
      <InputLabel shrink className={classes.labelStyle} style={{marginLeft:'10px', color: '#B7B7BF',marginBottom:'10px' }}>
        {label}
      </InputLabel>
      <BootstrapInput id="bootstrap-input" placeholder={placeHolder} />
    </FormControl>
  )
}

export default FormTextField