import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Box, Card, CardContent, CardActions, Button, Typography, Container, List, ListItemText, ListItem, ListItemIcon } from '@material-ui/core'
import SvgIcon from "@material-ui/core/SvgIcon";
import One from '../../../images/1.svg'
import Two from '../../../images/2.svg'
import Three from '../../../images/3.svg'
import cardRight from '../../../images/card_right.svg'
import cardLeft from '../../../images/card_left.svg'
import CustomButton from './CustomButton';
import Person from '../../../images/per_squre.svg'
import Heart from '../../../images/heart_squre.svg'
const useStyles = makeStyles((theme) => ({
    boxStyle: {
        background: 'white',
        position: 'relative',
        width: '100%',
        marginTop: '20px',
        paddingLeft: '100px'
    },
    headingStyle: {
        color: '#209CA2',
        fontSize: '12px',
        marginTop: '20px',
        fontFamily: 'Plus Jakarta Sans',
    },
    headingChild: {
        color: '#0A3133',
        fontSize: '20px',
        fontStyle: 'medium',
        fontFamily: 'Plus Jakarta Sans',
    },
    leftContent: {
        color: '#0A3133',
        fontFamily: 'Poppins',
        marginTop: '10px',

    },
    typoText: {
        marginBottom: '20px'
    },
    rightContent: {
        marginRight: '100px',
        fontFamily: 'Poppins'
    },
    rightSpanContent: {
        color: '#209CA2',
        fontWeight: 'bold'
    },
    bulletStyle: {
        width: '30px',
        height: '30px'
    },
    textList: {
        fontFamily: 'Poppins',
        color: '#0A3133',
        fontStyle: 'normal'
    },
    cardContainer: {

    },
    cardLeft: {
        width: '50%'
    },

    cardRight: {
        width: '50%',
        position: 'relative',
        left: '-103px',
        bottom: '-95px',
    },
    bottomLeft: {
        color: '#0A3133',
        fontFamily: 'Plus Jakarta Sans',
        fontStyle: 'normal',
        marginTop: '130px',
        fontWeight: 'bold'
    },
    bottomTypoLeftTitle: {
        fontSize: '25px',
        marginBottom: '20px',
        color: '#0A3133',
        fontFamily: 'Plus Jakarta Sans',
    },
    bottomTypoLeftChild: {
        fontSize: '15px',
        marginBottom: '20px',
        color: "#0A3133",
        fontWeight: '500'
    },
    bottomRight: {

        fontFamily: 'Poppins',
        justifyContent: 'left'
    },
    cardBottomRight: {
        marginRight: '300px',
        width: 350,
        padding: '10px',
        fontFamily: 'DM Sans',
        position: 'relative',
        zIndex: 1
    },
    cardBottomLeft: {
        width: 350,
        padding: '10px',
        fontFamily: 'DM Sans',
        position: 'relative',
        right: '-190px',
        top: '-39px',
    },
    boxPerson: {
        width: '60px',
        height: '60px'
    },
    profileTypo: {
        marginLeft: '10px',
        fontFamily: 'DM Sans'

    },
    typoDigit: {
        fontSize: '36px',
        fontFamily: 'DM Sans'
    },
    boxPersonMain: {
        marginBottom: '20px'
    },
    cardTagGreen: {
        background: '#EAFADD',
        borderRadius: '10px',
        alignItems: 'center',
        padding: '5px',
        color: '#67B724',
        marginLeft: '10px',
        fontFamily: 'DM Sans',
        fontSize: '12px',
        paddingRight: '14px'
    }




}))

function HomeContent() {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.boxStyle} justifyContent="space-between">
                <Grid direction='column'>
                    <Typography className={classes.headingStyle}>
                        Club manager
                    </Typography>
                    <Typography className={classes.headingChild}>
                        Manage your facility like a pro!
                    </Typography>
                </Grid>
                <Grid container justifyContent="space-between" className={classes.leftContent}>
                    <Grid  >
                        <Typography noWrap={false} className={classes.typoText}>
                            Start managing your courts and bookings through a digital<br /> platform. We have built the most effective platform for<br /> facilities who want to start handling bookings online in the <br />easiest fashion.
                        </Typography>
                        <CustomButton text="Get Started" />
                    </Grid>
                    <Grid className={classes.rightContent} >
                        <Typography className={classes.textList}>
                            With <span className={classes.rightSpanContent}>Racqy,</span> you can as a facility among other things:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <img src={One} className={classes.bulletStyle} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.textList}>
                                        Custom price courts and during specific times
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <img src={Two} className={classes.bulletStyle} />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography className={classes.textList}>
                                        Reduce your administration
                                    </Typography>

                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <img src={Three} className={classes.bulletStyle} />
                                </ListItemIcon>
                                <ListItemText >
                                    <Typography className={classes.textList}>
                                        Increase your profitability
                                    </Typography>
                                </ListItemText>
                            </ListItem>

                        </List>
                    </Grid>
                </Grid>

                <Grid container className={classes.cardContainer}>
                    <Grid direction='column'>
                        <img src={cardLeft} className={classes.cardLeft} />
                        <img src={cardRight} className={classes.cardRight} />
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between" className={classes.bottomLeft}>
                    <Grid >
                        <Typography className={classes.bottomTypoLeftTitle}>
                            Get real time statistics
                        </Typography>
                        <Typography noWrap={true} className={classes.bottomTypoLeftChild}>
                            You thought you knew your courts? With racqy manager you<br /> can get statistics of just about everything. Compare revenue<br /> of different times of the year, see who many people visit your <br />club profile and who many frequent visitors you have.
                        </Typography>
                        <Typography noWrap={true} className={classes.bottomTypoLeftChild}>
                            We have the lowest costs on the market compared with other <br />bookingssytems. We take 1% commission fee to cover our <br />costs and to improve our platform.
                        </Typography>
                    </Grid>
                    <Grid className={classes.bottomRight} direction='column'>
                        <Card className={classes.cardBottomRight}>
                            <CardContent>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className={classes.boxPersonMain}>
                                    <img src={Person} className={classes.boxPerson} />
                                    <Typography className={classes.profileTypo}>Profile visitors</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Typography className={classes.typoDigit}>379</Typography>
                                    <Typography className={classes.cardTagGreen}>+0.5% this week</Typography>
                                </Box>

                            </CardContent>
                        </Card>
                        <Card className={classes.cardBottomLeft}>
                            <CardContent>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className={classes.boxPersonMain}>
                                    <img src={Heart} className={classes.boxPerson} />
                                    <Typography className={classes.profileTypo}>Club likes</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Typography component="p" className={classes.typoDigit}>12</Typography>
                                    <Typography className={classes.cardTagGreen}>+0.5% this week</Typography>
                                </Box>

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeContent