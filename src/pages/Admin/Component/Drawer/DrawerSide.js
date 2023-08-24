import React from 'react'
import Drawer from "@material-ui/core/Drawer";
import { AppBar, Badge, Button, CssBaseline, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Menu, MenuItem, SvgIcon, Toolbar, Typography } from '@material-ui/core';
import settingIcon from '../../../../images/setting_ic.svg'
import schedulegIcon from '../../../../images/schedule_ic.svg'
import clubIcon from '../../../../images/club_ic.svg'
import drawerIcon from '../../../../images/drawer_ic.svg'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import bellIcon from '../../../../images/bell_icon.svg'
import { Link as GatsByLink } from "gatsby"
import que from '../../../../images/que.svg'
import personIcon from '../../../../images/person_menu.svg'
import logoutIcon from '../../../../images/logout_icon.svg'
import profileIcon from '../../../../images/p_icon.svg'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import downArrow from '../../../../images/down_icon.svg'
import { red } from '@material-ui/core/colors';
import rectLine from '../../../../images/rect_line.svg'
import queIcon from '../../../../images/que_item.svg';
import callIcon from '../../../../images/call_item.svg';
import mailIcon from '../../../../images/mail_item.svg';
import DynamicDrawer from '../Shedule/Drawer/DynamicDrawer';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    drawer: {
        width: 220,
        flexShrink: 0,
        whiteSpace: "nowrap",
        marginTop: '20px'
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        background: 'white',
        paddingTop: '60px'
    },
    contentData: {
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing.unit,
        justifyContent: "center",
        padding: "0 8px",
        ...theme.mixins.toolbar,
        background: 'white',
        paddingTop: '10px',
        width: '100%'

    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    appBar: {
        backgroundColor: 'transparent',
        zIndex: theme.zIndex.drawer + 1,

    },
    appbarMenu: {
        marginRight: '10px',
        display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'end', justifyItems: 'end', alignItems: 'center', marginBottom: '10px', background: 'white'
        , marginLeft: '131px', borderBottom: '1px solid #EAEAED'
    },

    toolbarImg: {
        marginLeft: '20px'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    },
    drawerText: {
        color: '#000000',
        fontSize: '15px',
        fontFamily: 'DM Sans',
        textDecoration: 'none'
    },
    menuStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px',
        fontFamily: "DM Sans",
        fontSize: '15px'
    },
    iconStyle: {
        width: '15px',
        marginRight: '10px'
    },
    textLink: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '12px',
        fontFamily: 'DM Sans'
    },
    disableDrawer:{
        width: 220,
        flexShrink: 0,
        whiteSpace: "nowrap",
        marginTop: '20px',   
        opacity:0.5,
        "&:hover":{
            cursor:'not-allowed'
        }

    }

}))
const NotFound = () => <p>Sorry, nothing here.</p>;
const toolItem = [
    {
        title: "Schedule",
        icon: schedulegIcon
    },
    {
        title: "Club Profile",
        icon: clubIcon
    },
    {
        title: "Settings",
        icon: settingIcon
    }

]

const menu_item = [
    {
        name: "User setting",
        icon: personIcon,
    },
    { name: "Logout", icon: logoutIcon },

];

const que_item = [
    {
        name: "To help page",
        icon: queIcon,
    },
    { name: "+46725022505", icon: callIcon },
    { name: "support@racqy.com", icon: mailIcon },

];


function DrawerSide({ children }) {
    const classes = useStyles();  
   

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElSetting, setAnchorElSetting] = React.useState(null);
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [IsDrawer,setDrawer]=React.useState()
    const [drawerOptions, setDrawerOptions] = React.useState({
        open: false,
        content: "",
      })
      const IsDrawer1=localStorage.getItem('drawer')
      React.useEffect(()=>{
         setDrawer(IsDrawer1)
      },[IsDrawer1])
      const handleClose1 = () => {
        setDrawerOptions({ open: false, content: "" })
      }
      const handleClose2 = () => {
        setAnchorEl1(null);
      };
    const open = Boolean(anchorEl);
    const openSetting = Boolean(anchorElSetting);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClickSetting = (event) => {
        setAnchorElSetting(event.currentTarget);
    };
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
      };
    const handleCloseSetting = () => {
        setAnchorElSetting(null);
       
    };
    const color = red[500]
    return (
        <div className={classes.root}>
            <ScopedCssBaseline />
            <AppBar elevation={0} className={classes.appBar}>
                <Toolbar disableGutters={true}>
                    <GatsByLink to="/Admin/Component/Drawer/Screen/Welcome/">
                    <img className={classes.toolbarImg} src={drawerIcon} alt='logo' />
                    </GatsByLink>
                    

                    <div className={classes.appbarMenu}>
                        <IconButton onClick={()=>setDrawerOptions({open:true,content:'Notification'})}>
                        <Badge variant='dot' color="secondary">
                                <img src={bellIcon} alt='bell' />
                            </Badge>
                        </IconButton>
                        <IconButton style={{ marginRight: '30px' }} 

                           
                            onClick={handleClick1} >
                            <img src={que} alt="que" />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl1}
                                keepMounted
                                open={Boolean(anchorEl1)}
                                onClose={handleClose2}
                            >
                                {que_item.map((data) => (
                                    <MenuItem onClick={handleClose2}><div className={classes.menuStyle}>
                                        {<img src={data.icon} className={classes.iconStyle} />}{data.name}
                                    </div></MenuItem>
                                ))}

                            </Menu>
                        

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-arround', width: '100%', alignItems: 'center' }} id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                                <img src={profileIcon} alt="profile" style={{ margin: '5px', width: '40px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginRight: '10px', marginLeft: '10px' }}>
                                    <Typography style={{ color: 'black', fontFamily: 'Plus Jakarta Sans', fontSize: '15px' }}>Collector A.</Typography>
                                    <Typography style={{ color: 'black', color: '#B7B7BF', fontSize: '10px' }}>Martin Bynke</Typography>
                                </div>
                                <img src={downArrow} style={{ margin: '5px', marginLeft: '30px' }} />
                            </div>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                {menu_item.map((data) => (
                                    <MenuItem onClick={handleClose}><div className={classes.menuStyle}>
                                        {<img src={data.icon} className={classes.iconStyle} />}{data.name === "User setting" ? <GatsByLink className={classes.textLink} to="/Admin/Pages/Settings/UserProfilePage">User setting</GatsByLink> : <GatsByLink className={classes.textLink} to="/" onClick={()=>localStorage.clear()}>Logout</GatsByLink>}
                                    </div></MenuItem>
                                ))}

                            </Menu>
                        </div>
                    </div>





                </Toolbar>

            </AppBar>
            <Drawer variant="permanent" className={IsDrawer?classes.drawer:classes.disableDrawer}>
                <div className={classes.toolbar}>
                    <List>
                        {toolItem.map((data, index) => (
                            <ListItem button key={index} >
                                <ListItemIcon>
                                    <img src={data.icon} alt='icon' />
                                </ListItemIcon>
                                <ListItemText>
                                    {data.title === "Club Profile" ? <GatsByLink className={classes.drawerText} to='/Admin/Pages/ClubProfile/ClubProfilePage' >ClubProfile</GatsByLink> : ""}
                                    {data.title === "Schedule" ? <GatsByLink className={classes.drawerText} to='/Admin/Pages/Shedule' >Schedule</GatsByLink> : ""}
                                    {data.title === "Settings" ? <GatsByLink className={classes.drawerText} to='/Admin/Pages/Settings/SettingPage/' >Settings</GatsByLink> : ""}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>



            <main className={classes.content}>
                <div className={classes.contentData}>

                    {children}
                </div>
            </main>
            <DynamicDrawer
        handleClose={handleClose1}
        open={drawerOptions.open}
        content={drawerOptions.content}
      />
        </div>
    )
}

export default DrawerSide