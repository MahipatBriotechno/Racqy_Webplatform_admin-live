import { Drawer, makeStyles, Typography } from '@material-ui/core';
import React, { Fragment, useState } from 'react'
import Booking from './Booking';
import EditBilling from './EditBilling';
import EditClub from './EditClub';
import EditCourt from './EditCourt';
import EditPassword from './EditPassword';
import EditUser from './EditUser';
import NewBooking from './NewBooking';
import NewCourt from './NewCourt';
import NewUser from './NewUser';
import Notification from './Notification';

const useStyle = makeStyles((theme) => ({
    root: {
        width: 250,
        height: '100%'
    }
}))

function UserDrawerWrapper({ handleClose, open, content }) {
    console.log(open);
    const classes = useStyle();
    return (
        <Drawer variant='temporary' anchor='right' containerStyle={{ height: 'calc(100% + 64px)' }} PaperProps={{
            style: { width: 500 }
        }} className={classes.root} open={open} onClose={handleClose}>
            <div style={{ height: 1000 }}>
                {
                    content === "NewUser" && <NewUser close={handleClose} />
                }
                {
                    content === "EditUser" && <EditUser close={handleClose} />
                }
            </div>
        </Drawer>
    )
}

export default UserDrawerWrapper