import React from 'react'
import flagIcon from '../../../../../../images/flagIcon.svg'
import { TextField, InputBase, FormControl, InputLabel, InputAdornment, SvgIcon } from '@material-ui/core';
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
        borderRadius: 10,
        position: 'relative',
        backgroundColor: '#F5F6F8',
        border: 'none',
        fontSize: '12px',
        marginTop: '30px',
        marginBottom: '10px',
        padding: '3px',
        width: '100%',
        margin: 'auto',
        marginLeft: 6,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'DM Sans'
        ].join(','),


    },
    inputAdornedStart: {
        backgroundColor: 'red'
    }

}))(TextField);

function DrawerTextWithIcon({ placeHolder, label }) {
    const classes = useStyles();
    return (
        <FormControl className={classes.rootStyle} >
            <InputLabel shrink className={classes.labelStyle} style={{ marginLeft: '10px', color: '#B7B7BF', marginBottom: '10px' }}>
                {label}
            </InputLabel>
            <BootstrapInput id="bootstrap-input" InputProps={{
                disableUnderline: true,
                startAdornment: (
                    <InputAdornment style={{marginLeft:'5px'}}>
                        <img src={flagIcon} />
                    </InputAdornment>

                )
            }} placeholder={placeHolder} />
        </FormControl>
    )
}

export default DrawerTextWithIcon