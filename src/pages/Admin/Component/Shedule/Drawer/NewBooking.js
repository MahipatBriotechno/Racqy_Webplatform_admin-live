import { IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import DrawerSelect from './Utils/DrawerSelect';
import DrawerTextField from './Utils/DrawerTextField';
import DrawerButton from './Utils/DrawerButton';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
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
        paddingRight: '15px ',

    },
    dateTime: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '10px'
    },
    rootButton: {
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', bottom: '0', right: '0',justifyContent:'space-between', position: 'absolute',
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
function NewBooking({ close }) {
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
                <Typography className={classes.typoTitle} style={{ margin: '13px' }}>New booking</Typography>
                <IconButton onClick={close}>
                    <CloseIcon style={{ margin: '13px' }} />
                </IconButton>
            </div>
            <div className={classes.rootForm}>
                <div className={classes.rootMainForm}>
                    <div style={{ marginRight: '10px' }}>
                        <DrawerSelect placeHolder="Choose court" data={DATA_COURT} label="Choose court" />
                    </div>
                    <div className={classes.dateTime}>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '0px' }}>
                            <DrawerSelect placeHolder="Date & Time" data={DATA_DATE} label="Date & Time" />
                        </div>
                        <div style={{ display: 'flex', direction: 'column', width: '100%', alignItems: 'center', justifyContent: 'space-between', }}>
                            <DrawerSelect placeHolder="Time" data={DATA_TIME} label='&nbsp;&nbsp;' />
                            <Typography style={{ marginTop: '20px' }}>-</Typography>
                            <DrawerSelect placeHolder=" Time" data={DATA_TIME_2} label='&nbsp;&nbsp;' />
                        </div>
                    </div>
                    <div style={{ width: '100%' }}>
                        <DrawerTextField placeHolder="Booking email" label="Booking email" />
                    </div>

                </div>
               
                <div className={classes.rootButton}>
                <div className={classes.subButton}>
                    <Typography>Order Value</Typography>
                    <Typography>400 SEK</Typography>
                    <DrawerButton text="Create" /></div>

            </div>
            </div>
            
          
        </div>
    )
}

export default NewBooking