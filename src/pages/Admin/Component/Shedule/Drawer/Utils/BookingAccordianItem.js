import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import DrawerTextField from './DrawerTextField';
import DrawerTextWithIcon from './DrawerTextWithIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        marginRight: '0px'

    },
    rootTypo: {
        marginLeft: '9px'
    },
    typoText: {
        fontSize: '12px',
        fontFamily: 'DM Sans',
        color: '#B7B7BF',
        marginLeft: '9px'
    },
    rootForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '10px',
        marginTop: '-20px'
    }
}))

function BookingAccordianItem() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.rootTypo}>
                <Typography className={classes.typoText}>
                    Customers telephone number
                </Typography>
            </div>
            <div className={classes.rootForm}>
                <div style={{ width: "20%", marginLeft: '12px' }}>
                    <DrawerTextWithIcon placeHolder="+46" label="" />
                </div>
                <div style={{ width: "100%", marginLeft: '30px' }}>
                    <DrawerTextField placeHolder="+46" label="" />
                </div>
            </div>
        </div>
    )
}

export default BookingAccordianItem