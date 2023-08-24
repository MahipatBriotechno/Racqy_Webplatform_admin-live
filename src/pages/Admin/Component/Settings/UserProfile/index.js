import { makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'
import DrawerSide from '../../Drawer/DrawerSide';
import DrawerTextField from '../../../Component/Shedule/Drawer/Utils/DrawerTextField'

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'white',
        marginLeft: '20px',
        border: 'none',
        borderRadius: '10px',
        paddingLeft: '20px',
        width: '30%',
        padding: '5px',


    },
    formContent: {
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        margin: '5px',
        width: '100%'
    },
    typoTitle: {
        fontSize: '25px',
        fontFamily: 'Plus Jakarta Sans',
        color: '#0A3133',
        marginBottom: '20px',
        fontWeight: 400,
    

    },
    subContent: {
        width: '100%', display: 'flex', justifyContent: 'flex-start', marginTop: '20px'
    },
    contentRoot: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: '10px',
        paddingTop: '40px',
        paddingLeft: '40px',
        background: '#F9FAFC',
        border: "1px solid rgb(128 128 128 / 15%)",
        borderRadius: "15px",
    },
    titleTypo: {
        color: '#0A3133',
        fontSize: '15px',
        fontFamily: 'DM Sans',
        width:'6%'
    },
    edit:{
        color:'#B4B4BC',
        fontFamily:'Plus Jakatra Sans',
        fontSize:'10px',
        marginLeft:'10px'
    }
}))

function UserProfile() {
    const classes = useStyles();
    return (
        <DrawerSide>
            <div style={{ width: '100%',marginRight:'50px' }}>
                <div className={classes.subContent}>
                    <Typography className={classes.typoTitle}>
                        User Profile Settings
                    </Typography>
                </div>
                <div className={classes.contentRoot}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography style={{marginBottom:'20px'}}>User Profile Settings</Typography>
                        <div className={classes.formContent}>
                            <Typography className={classes.titleTypo}> Name</Typography>
                            <TextField placeholder='name' className={classes.root} InputProps={{ disableUnderline: true }} />
                        </div>
                        <div className={classes.formContent}>
                            <Typography className={classes.titleTypo}>Email</Typography>
                            <TextField placeholder='Email' className={classes.root} InputProps={{ disableUnderline: true }} />
                        </div>
                        <div className={classes.formContent}>
                            <Typography className={classes.titleTypo}>Password</Typography>
                            <TextField placeholder='password' className={classes.root} type="password" InputProps={{ disableUnderline: true }} />
                            <Typography className={classes.edit}>Edit</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </DrawerSide>
    )
}

export default UserProfile