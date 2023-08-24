import React from 'react'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, ButtonProps } from '@material-ui/core'
import footerLogo from '../../../images/footerimage.jpeg'
import CustomButton from './CustomButton';
import fb from '../../../images/fb.svg'
import insta from '../../../images/insta.svg'
import tiktok from '../../../images/tiktok.svg'
import linkdin from '../../../images/linkdin.svg'
import { Link } from 'gatsby'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: 'DM Sans',
        width: '100%',
        position: 'absolute'
    },
    boxStyle: {
        color: "#979D9D",
        width: "100%",
        paddingTop: "70px",
        paddingBottom: "23px",
        background: "white",
        fontFamily: "DM Sans",
        paddingLeft: "6.5rem",
        paddingRight: "9rem"
    },
    containerStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    footerLg: {
        width: '50px',
        height: '50px',
        margin: '5px'
    },
    footerHeading: {
        fontWeight: 'normal',
        color: '#211F1F',
        marginBottom: '5px',
        alignItems: 'center'
    },
    firstCol: {
        fontSize: '10px',

    },
    secondCol: {
        fontSize: '15px',

        alignItems: 'center'
    },
    footerSocial: {
        width: '40px',
        height: '40px'
    },
    link: {
        textDecoration: 'none',
        color: '#979D9D'
    }

})
);



const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className={classes.boxStyle} spacing={25} maxWidth="xs" justifyContent='space-between' container >
                <Grid item  >
                    <img src={footerLogo} alt="footerLogo" className={classes.footerLg} />
                    <Typography className={classes.firstCol}>
                        Birger Jarlsgatan 2<br />
                        114 24, Stockholm, Sweden
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.footerHeading}>Compony</Typography>
                    <Link className={classes.link} to="/Admin/Pages/About/About">
                        <Typography className={classes.secondCol}>
                            About</Typography>
                    </Link>
                    <Link className={classes.link} to="/Admin/Pages/PressKit/PressKit">
                        <Typography className={classes.secondCol}>
                            Press
                        </Typography>
                    </Link>
                    <Link className={classes.link} to="/Admin/Pages/Invest/Invest">
                        <Typography className={classes.secondCol}>
                            Invset</Typography>
                    </Link>
                </Grid>
                <Grid item >
                    <Typography className={classes.footerHeading}>Legal</Typography>
                    <Link className={classes.link} to="/Admin/Pages/Term/Term">
                        <Typography className={classes.secondCol}>
                            Terms and conditions
                        </Typography>
                    </Link>
                    <Link className={classes.link} to="/Admin/Pages/Privacy/Privacy">
                        <Typography className={classes.secondCol}>
                            Privacy policy
                        </Typography>
                    </Link>
                    <Link className={classes.link} to="/Admin/Pages/Cookies/Cookies">
                        <Typography className={classes.secondCol}>
                            Cookies policy</Typography>
                    </Link>
                </Grid>
                <Grid item >
                    <Typography className={classes.footerHeading}>Platform</Typography>
                    <Link className={classes.link} to="/Admin/Pages/Language/Language">
                        <Typography className={classes.secondCol}>
                            Language</Typography>
                    </Link>
                    <Link className={classes.link} to="/Admin/Pages/DownloadApp/DownloadApp">
                        <Typography className={classes.secondCol}>
                            Download App</Typography>
                    </Link>
                    <Link className={classes.link} to="/Admin/Pages/Help/Help">
                        <Typography className={classes.secondCol}>
                            Help</Typography>
                    </Link>
                </Grid>
                <Grid >
                    <CustomButton text="Racqy players" />
                </Grid>
                <Grid xs={1}>
                    <img src={insta} className={classes.footerSocial} />
                    <img src={linkdin} className={classes.footerSocial} />
                    <Grid >
                        <img src={tiktok} className={classes.footerSocial} />
                        <img src={fb} className={classes.footerSocial} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer