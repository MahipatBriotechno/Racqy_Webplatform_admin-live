import { IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import DrawerSelect from './Utils/DrawerSelect';
import DrawerTextField from './Utils/DrawerTextField';
import DrawerButton from './Utils/DrawerButton';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: [
            'DM Sans'
        ].join(','),
    },
    titleRoot: {
        width: '97%',
        display: 'flex',
        marginTop: '40px',
        marginBottom: '30px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '15px',
        fontFamily: [
            'DM Sans'
        ].join(','),

    },
    rootForm: {
        width: '100%',
    },
    rootMainForm: {
        paddingLeft: '15px',
        paddingRight: '15px '
    },
    dateTime: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '10px'
    },
    rootButton: {
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', bottom: '0', right: '0', position: 'absolute',
        marginBottom: '20px',

    },
    subButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: '25px'
    },
    typoTitle: {
        fontFamily: 'DM Sans',
        fontSize: '30px',
        fontWeight: 400,

    }

}))
function EditPassword({ close }) {
    const DATA_COURT = [
        { label: "Court 1", value: 1 },
        { label: "Court 2", value: 2 },
        { label: "Court 3", value: 3 },
    ]

    const DATA_TIME = [
        { label: "11:00", value: 1 },
        { label: "11:00", value: 2 },
        { label: "11:00", value: 3 },
    ]

    const DATA_DATE = [
        { label: "14/7", value: 1 },
        { label: "14/7", value: 2 },
        { label: "14/7", value: 3 },
    ]


    const DATA_TIME_2 = [
        { label: "12:00", value: 1 },
        { label: "12:00", value: 2 },
        { label: "12:00", value: 3 },
    ]
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.titleRoot}>
                <Typography className={classes.typoTitle} style={{ margin: '13px' }}>Edit your password</Typography>
                <IconButton onClick={close}>
                    <CloseIcon style={{ margin: '13px' }} />
                </IconButton>
            </div>
            <div className={classes.rootForm}>
                <div className={classes.rootMainForm}>

                    <div style={{ width: '100%' }}>
                        <DrawerTextField type="password" placeHolder="Enter Current Password" label="Enter Current Password" />
                        <DrawerTextField type="password" placeHolder="Enter New Password" label="Enter New Password" />
                        <DrawerTextField type="password" placeHolder="Re-enter New Password" label="Re-enter New Password" />
                    </div>
                    <div className={classes.rootButton}>
                        <div className={classes.subButton}>
                            <DrawerButton text="Save" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPassword