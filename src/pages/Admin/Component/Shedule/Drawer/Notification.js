import { Box, IconButton, makeStyles, Tab, Tabs, Typography } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import DrawerSelect from './Utils/DrawerSelect';
import DrawerTextField from './Utils/DrawerTextField';
import DrawerButton from './Utils/DrawerButton';
import PropTypes from 'prop-types';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import DrawerNotificationTag from './Utils/DrawerNotificationTag';

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

    },
    indicator: {
        backgroundColor: "#209CA3",
        height: "10px",
        top: "45px",
        color: 'red',
    },
    selected: {
        color: '#209CA3'
    },
    tabRoot: {
        fontSize: '13px',
        textTransform: 'none',
        textAlign: 'left',
        padding: 0,


    },
    tabPanelRoot: {
        padding: '0',
        width: '100%',
        marginTop: '20px',

    }


}))



function Notification({ close }) {
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
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.titleRoot}>
                <Typography className={classes.typoTitle} style={{ margin: '13px' }}>Notifications</Typography>
                <IconButton onClick={close}>
                    <CloseIcon style={{ margin: '13px' }} />
                </IconButton>
            </div>
            <div className={classes.rootForm}>
                <Box sx={{ width: '85%', typography: 'body1', marginLeft: '35px', marginRight: '50px' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList classes={{ indicator: classes.indicator, flexContainer: "flexContainer" }} onChange={handleChange} aria-label="lab API tabs example" >
                                <Tab label="Bookings (10)" className={classes.tabRoot} value="1" classes={{ selected: classes.selected }} style={{ borderBottom: '3px solid #F0F0F0' }} />
                                <Tab label="All (5)" value="2" className={classes.tabRoot} style={{ borderBottom: '3px solid #F0F0F0' }} classes={{ selected: classes.selected }} />
                                <Tab label="&nbsp;" value="3" style={{ borderBottom: '3px solid #F0F0F0' }} disabled />

                            </TabList>
                        </Box>
                        <TabPanel className={classes.tabPanelRoot} value="1">
                            <div>
                                <DrawerNotificationTag title="Carl  B. booked court 1" time="on Wednesday 14th May 1:00 - 12:00" price="400kr" />
                                <DrawerNotificationTag title="Carl  B. booked court 1" time="on Wednesday 14th May 1:00 - 12:00" price="400kr" />
                                <DrawerNotificationTag title="Carl  B. booked court 1" time="on Wednesday 14th May 1:00 - 12:00" price="400kr" />
                                <DrawerNotificationTag title="Carl  B. booked court 1" time="on Wednesday 14th May 1:00 - 12:00" price="400kr" />
                                <DrawerNotificationTag title="Carl  B. booked court 1" time="on Wednesday 14th May 1:00 - 12:00" price="400kr" />
                            </div>
                        </TabPanel>
                        <TabPanel value="2" className={classes.tabPanelRoot}>
                            <DrawerNotificationTag title="New policy update: See here" />
                            <DrawerNotificationTag title="Webplatform updated to version 1.0.9" />
                            <DrawerNotificationTag title="Carl  B. booked court 1" time="on Wednesday 14th May 1:00 - 12:00" />
                        </TabPanel>

                    </TabContext>
                </Box>
            </div>
        </div>
    )
}

export default Notification