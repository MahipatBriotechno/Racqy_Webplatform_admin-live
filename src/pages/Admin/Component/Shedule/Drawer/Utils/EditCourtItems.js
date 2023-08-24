import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import DrawerSelect from './DrawerSelect';
import DrawerTextField from './DrawerTextField';
import DrawerTextWithIcon from './DrawerTextWithIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        marginRight: '0px',
        marginTop:'20px'

    },
    rootTypo: {
        marginLeft: '9px'
    },
    typoText: {
        fontSize: '12px',
        fontFamily: 'DM Sans',
        color: '#B7B7BF',
        marginLeft: '0px'
    },
    rootForm: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '10px',
        marginTop: '-20px'
    }
}))

function EditCourtItem() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.rootForm}>
                <div style={{ width: "50%", marginLeft: '0px' }}>
                    <DrawerSelect placeHolder="Status" label="Status" />
                </div>
                <div style={{ width: "50%", marginLeft: '30px',marginRight:'10px' }}>
                    <DrawerSelect placeHolder="Booking length" label="Booking length" />
                </div>
            </div>
        </div>
    )
}

export default EditCourtItem