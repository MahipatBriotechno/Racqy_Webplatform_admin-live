import { Typography } from '@material-ui/core'
import React from 'react'
import icon from '../../../../../../images/noti_icon.svg'
function DrawerNotificationTag({ title, time, price }) {
    return (
        <div style={{ width: 'auto', padding: '4px', backgroundColor: '#F5F6F8', marginTop: '15px', borderRadius: 10, color: '#000000', display: 'flex', flexDirection: 'row', fontSize: '5px', alignItems: 'center', justifyContent: 'space-around' }}>
            <div style={{ width: '10%' }}>
                <img src={icon} alt="logo" width="30px" style={{ padding: '5px' }} />
            </div>
            <div style={{ width: '82%' }}>
                <Typography style={{ fontSize: '10px', marginLeft: '0px', fontFamily: 'DM Sans', fontWeight: '400' }}>
                    {`${title} ${time}`}
                </Typography>
            </div>
            <div style={{ width: '12%' }}>
                <Typography style={{ fontSize: '10px', fontFamily: 'DM Sans' }}>
                    {price}
                </Typography>
            </div>
        </div>
    )
}

export default DrawerNotificationTag