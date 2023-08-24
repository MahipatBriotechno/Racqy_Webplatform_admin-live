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
        display: 'flex',
        marginTop: '5px'
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
        backgroundColor: '#F5F6F8',
        border: 'none',
        fontSize: '13px',
        marginTop: '12px',
        marginBottom: '10px',
        padding: '12px 12px',
        width: '100%',
        margin: 'auto',
        marginLeft: 6,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'DM Sans'
        ].join(','),

    },
}))(InputBase);

function DrawerTextField({ placeHolder, label, type }) {
    const classes = useStyles();
    return (
        <FormControl className={classes.rootStyle}>
            <InputLabel shrink className={classes.labelStyle} style={{ marginLeft: '10px', color: '#B7B7BF', marginBottom: '10px' }}>
                {label}
            </InputLabel>
            <BootstrapInput id="bootstrap-input" type={type} placeholder={placeHolder} />
        </FormControl>
    )
}

export default DrawerTextField