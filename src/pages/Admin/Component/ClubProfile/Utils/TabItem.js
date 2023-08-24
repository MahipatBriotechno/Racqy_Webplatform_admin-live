import React from 'react'
import CardView from './CardView'
import userIcon from '../../../../../images/per_squre.svg'
import heartIcon from '../../../../../images/heart_squre.svg'
import clipIcon from '../../../../../images/clip_icon.svg'
import revIcon from '../../../../../images/rev_icon.svg'

function TabItem() {
    return (
        <>
            <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ width: '50%', marginRight: '-43px' }}>
                    <CardView logo={clipIcon} digit="43" grayTitle="Bookings" isTagGreen={true} tagLine="+0.5% this week" />
                </div>
                <div style={{ width: '50%' }}>
                    <CardView logo={userIcon} digit="379" grayTitle="Profile visitors" isTagGreen={true} tagLine="+0.5% this week" />
                </div>
            </div>
            <div style={{ width: '100%', display: 'flex' }}>
                <div style={{ width: '50%', marginRight: '-43px' }}>
                    <CardView logo={heartIcon} digit="12" grayTitle="Club likes" isTagGreen={true} tagLine="+0.5% this week" />
                </div>
                <div style={{ width: '50%' }}>
                    <CardView logo={revIcon} digit="4 679kr" grayTitle="Revenue" isTagGreen={false} tagLine="+0.5% this week" />
                </div>
            </div>
        </>
    )
}

export default TabItem