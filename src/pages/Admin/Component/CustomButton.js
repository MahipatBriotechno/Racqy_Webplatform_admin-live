import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { ButtonColor } from '../ThemeFile/ButtonColor';

const useStyles = makeStyles((theme) => ({
    customButton: {
        background: `${ButtonColor}`,
        border: 0,
        borderRadius: 5,
        fontFamily: 'DM Sans',
        color: "white",
        height: 38,
        width: 200,
        fontWeight: 'bold',
        padding: "0 10px",
        textTransform: 'none',
        "&:hover":{
            background: `${ButtonColor}`,
        }
    },
}))

function CustomButton({ text, handleOnClick }) {
    const classes = useStyles();
    return (
        <Button variant='contained' className={classes.customButton} onClick={handleOnClick}>{text}</Button>
    )
}

export default CustomButton