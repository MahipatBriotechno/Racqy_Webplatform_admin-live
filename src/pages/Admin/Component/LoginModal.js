import React, { useState } from 'react'
import { Box, Dialog, Button, DialogContent, DialogContentText, Grid, Modal, Typography, DialogActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import loginLogo from '../../../images/login_logo.svg'
import { ButtonColor } from '../ThemeFile/ButtonColor';
function LoginModal() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const useStyles = makeStyles((theme) => ({
        boxStyle: {
            backgroundColor: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 450,
            height: 500,
            border: 'none',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            fontFamily: 'DM Sans',
            alignItems: 'center',
            justifyContent: 'center',
        },
        titleLogin: {
            fontSize: '20px',
            fontStyle: 'normal',
            color: '#0A3133',
            marginTop: '20px'

        },
        descLogin: {
            fontSize: '17px',
            fontStyle: 'normal',
            wordWrap: 'normal',
            color: '#0A3133',
            textAlign: 'center'
        },
        spanText: {
            color: '#209CA2',
            fontSize: '18px'
        },
        modalDigit: {
            color: '#0A3133',
            fontSize: '30px',
            marginTop: '10px'
        },
        modalDigitChild: {
            color: '#B9B9B9'
        },
        modalBottom: {
            color: "#000000",
            background: '#F4F5F7',
            width: '100%',
            marginTop: '-7px',
            padding: '15px'
        },
        loginBtn: {
            background: `${ButtonColor}`,
            color: 'white',
            marginTop: '30px',
            width: '100%',
            textTransform: 'none',
            borderRadius: '2px',
            "&:hover":{
                background: `${ButtonColor}`,
            }
        },
        createAccBtn: {
            background: `${ButtonColor}`,
            color: 'white',
            marginTop: '10px',
            width: '100%',
            textTransform: 'none',
            "&:hover":{
                background: `${ButtonColor}`,
            }
        },
        bottomSignup: {
            fontFamily: 'DM Sans',
            color: '#000000',
            fontSize: "12px"
        }



    }));
    const classes = useStyles();
    return (

        <div>

            <Box hideBackdrop={true}

                sx={{ padding: "30px 30px 0px" }}

            >

                <Grid container justifyContent='center' alignItems='center'>
                    <Grid item justifyContent='center' alignItems='center' container direction='column'>
                        <img src={loginLogo} />

                        <Typography className={classes.titleLogin}>
                            Club Manager
                        </Typography>
                    </Grid>
                    <Grid item justifyContent='center' alignItems='center' container>
                        <Typography className={classes.descLogin} variant='p' noWrap={false}>
                            Do you want your facility to be visible to <span className={classes.spanText}>thousands of people</span> on our platform? Create a profile for your facility below!
                        </Typography>
                    </Grid>
                    <Grid item justifyContent='center' alignItems='center' container direction='column' spacing={0}>
                        <Typography className={classes.modalDigit}>
                            47 650 +
                        </Typography>

                        <Typography variant='p' className={classes.modalDigitChild}>
                            Facilities connected to racqy
                        </Typography>

                    </Grid>
                    <Grid justifyContent='center' alignItems='center' container>
                        <Button disableElevation disableTouchRipple disableRipple variant='contained' className={classes.loginBtn}>Login</Button>
                        <Button disableElevation disableTouchRipple disableRipple variant='contained' className={classes.createAccBtn}>Create account</Button>
                    </Grid>
                </Grid>


                <Grid justifyContent='center' alignItems='center' container className={classes.modalBottom}>
                    <Typography className={classes.bottomSignup} >
                        Want to log in as a normal user? Log in here
                    </Typography>
                </Grid>
            </Box>
        </div>
    )
}

export default LoginModal