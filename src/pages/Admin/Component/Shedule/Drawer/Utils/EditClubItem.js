import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CustomToogle from '../../../CustomToogle';
import DrawerCustomToogle from './DrawerCustomToogle';
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
        height:'100%'

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
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: '10px',
        marginTop: '-20px'
    },
    rootSubForm: {
        display: 'flex', flexDirection: 'row', width: '100%'
    }
}))




function EditClubItem() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.rootTypo}>
                <Typography className={classes.typoText}>
                    Opening hours
                </Typography>
            </div>
            <div className={classes.rootForm}>
                <div className={classes.rootSubForm}>
                    <div style={{ width: "60%", marginLeft: '20px' }}>
                        <DrawerCustomToogle isChecked={true} label="Monday" />
                    </div>
                    <div style={{ width: "30%", marginLeft: '10px' }}>
                        <DrawerSelect placeHolder="8:00" label="&nbsp;&nbsp;" />

                    </div>
                    <Typography style={{ alignItems: "center", display: "flex", marginLeft: '10px', marginTop: '15px' }}>
                        -
                    </Typography>
                    <div style={{ width: "30%", marginLeft: '5px', marginRight: '5px' }}>
                        <DrawerSelect placeHolder="8:00" label="&nbsp;&nbsp;" />
                    </div>
                </div>
                <div className={classes.rootSubForm}>
                <div style={{ width: "60%", marginLeft: '20px' }}>
                    <DrawerCustomToogle isChecked={true} label="Monday" />
                </div>
                <div style={{ width: "30%", marginLeft: '10px' }}>
                    <DrawerSelect placeHolder="8:00" label="&nbsp;&nbsp;" />

                </div>
                <Typography style={{ alignItems: "center", display: "flex", marginLeft: '10px', marginTop: '15px' }}>
                    -
                </Typography>
                <div style={{ width: "30%", marginLeft: '5px', marginRight: '5px' }}>
                    <DrawerSelect placeHolder="8:00" label="&nbsp;&nbsp;" />
                </div>
            </div>
            <div className={classes.rootSubForm}>
                    <div style={{ width: "60%", marginLeft: '20px' }}>
                        <DrawerCustomToogle isChecked={true} label="Monday" />
                    </div>
                    <div style={{ width: "30%", marginLeft: '10px' }}>
                        <DrawerSelect placeHolder="8:00" label="&nbsp;&nbsp;" />

                    </div>
                    <Typography style={{ alignItems: "center", display: "flex", marginLeft: '10px', marginTop: '15px' }}>
                        -
                    </Typography>
                    <div style={{ width: "30%", marginLeft: '5px', marginRight: '5px' }}>
                        <DrawerSelect placeHolder="8:00" label="&nbsp;&nbsp;" />
                    </div>
                </div>
              
            </div>

        </div>
    )
}

export default EditClubItem