import { Box, Grid, makeStyles, Tab, Tabs, Typography } from '@material-ui/core'

import React from 'react'
import PropTypes from 'prop-types';
import CardView from './CardView';
import TabItem from './TabItem';


const useStyles = makeStyles((theme) => ({
    tab: {
        minWidth: 70,
        width: 50,
        fontFamily: 'DM Sans',
        color: 'black',
        fontSize: '10px',
        textTransform: 'none',
        margin: 0,
        minHeight: '30px',
        padding: '6px'


    },
    selected: {
        background: 'white',
        borderRadius: '15px',
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    },
    label: {
        margin: '-100px'
    },
    scroller: {
        padding: '26px'
    }

}))


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabsContent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', bgcolor: '#F9FAFC' }}>
            <Tabs classes={{ scroller: classes.scroller }} TabIndicatorProps={{
                style: { display: 'none', background: 'white', }
            }} value={value} onChange={handleChange} >
                <Tab classes={{ root: classes.tab, selected: classes.selected, labelIcon: classes.label }} label="Day" />
                <Tab classes={{ root: classes.tab, selected: classes.selected }} label="Week" />
                <Tab classes={{ root: classes.tab, selected: classes.selected }} label="Month" />
                <Tab classes={{ root: classes.tab, selected: classes.selected }} label="All Time" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <TabItem />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TabItem />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TabItem />
            </TabPanel>
        </Box>
    )
}

export default TabsContent