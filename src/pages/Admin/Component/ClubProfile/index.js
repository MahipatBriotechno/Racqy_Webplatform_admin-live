import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import DrawerSide from '../Drawer/DrawerSide'
import profileImg from '../../../../images/club_profile.svg'
import locationIc from '../../../../images/location.svg'
import line from '../../../../images/line_club.svg'
import RightSidebar from './Utils/RightSidebar'
import TabsContent from './Utils/TabsContent'
import DynamicDrawer from '../Shedule/Drawer/DynamicDrawer'

const useStyles = makeStyles(theme => ({
    typoTitle: {
        fontSize: '25px',
        fontFamily: 'Plus Jakarta Sans',
        color: '#0A3133',
        marginBottom: '20px',
        fontWeight: 400
    },
    subContent: {
        width: '50%', display: 'flex', justifyContent: 'flex-start',marginTop:'20px'
    },
    contentRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        background: '#F9FAFC',
        border: "1px solid rgb(128 128 128 / 15%)",
        borderRadius: "15px",
    },
    profileRoot: {
        width: '100%'
    },
    profileContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: '10px',
        paddingTop: '10px',
        justifyContent: 'left'
    },
    collectorText: {
        color: '#0A3133',
        fontSize: '20px',
        fontFamily: 'DM Sans',
        fontWeight: 400
    },
    num: {
        color: '#209CA2',
        fontSize: '12px',
        fontWeight: 400,
        fontFamily: 'DM Sans'
    },
    linkEdit: {
        color: '#B4B4BC',
        fontSize: '9px',
    },
    contentArea: {
        width: '100%',

    }

}))

function ClubProfile() {
    const [drawerOptions, setDrawerOptions] = React.useState({
        open: false,
        content: "",
      })
      const handleClose = () => {
        setDrawerOptions({ open: false, content: "" })
      }
    const classes = useStyles();

    return (
        <DrawerSide>
            <div style={{ width: '100%' }}>
                <div className={classes.subContent}>
                    <Typography className={classes.typoTitle}>
                        Club Profile
                    </Typography>
                </div>
                <div className={classes.contentRoot}>
                    <div className={classes.profileRoot}>
                        <div className={classes.profileContent}>
                            <div style={{ width: '20%' }} onClick={()=>setDrawerOptions({open:true,content:'EditClub'})}>
                                <img src={profileImg} width="100px" />
                            </div>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', textAlign: 'justify' }}>
                                <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                                    <span className={classes.collectorText}> Collector Bank Arena (GTG)</span><br />
                                    <span className={classes.num}><span><img src={locationIc} width="10px" style={{ marginRight: '5px' }} /></span>Rinkebyvägen 31, 115 23 Danderyd</span><br />
                                    <span className={classes.linkEdit}>Edit</span>
                                </div>
                            </div>
                        </div>
                        <div className={classes.contentArea}>
                            <div style={{ width: '50%' }}>
                                <img src={line} style={{ width: "500px", marginLeft: '20px' }} />
                            </div>
                        </div>
                        {/*Tab Content*/}
                        <div style={{ width: '100%' }}>
                            <TabsContent />
                        </div>
                    </div>


                    <div style={{ width: '40%' }}>
                        <RightSidebar />
                    </div>

                </div>

            </div>
            <DynamicDrawer
        handleClose={handleClose}
        open={drawerOptions.open}
        content={drawerOptions.content}
      />
        </DrawerSide>
    )
}
export default ClubProfile