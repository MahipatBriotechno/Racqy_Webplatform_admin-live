import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CustomButton from '../../CustomButton';
import clubSport from '../../../../../images/club_sport.svg'
import { navigate } from '@reach/router';
import { Match } from '@reach/router';
import DrawerSide from '../../../Component/Drawer/DrawerSide';
import { Link } from 'gatsby'
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F9FAFC',
        width: '100%',
        borderRadius: '10px 10px 0px 0px',
        height: '100%',
        paddingTop: '10px',
        paddingLeft: '40px',
        fontFamily: 'DM Sans',
    },
    welcomeText: {
        fontSize: '28px',
        marginBottom: '40px'
    },
    subText: {
        color: '#0A3133',
        fontFamily: 'DM Sans',
        fontStyle: 'normal',
        fontSize: '14px',
        marginBottom: '100px',
        fontWeight: '400'
    },
    boxRoot: {
        display: 'flex'
    },
    clubSportImg: {
        width: '300px',
        height: '300px',
        marginTop: '20px'
    }

}))

const handleClick = () => {
  
}

function Welcome() {
    const classes = useStyles();
    return (
        <DrawerSide>
        <div className={classes.root}>
            <Grid direction='row' className={classes.boxRoot}>
                <Grid container direction='column'>
                    <Typography className={classes.welcomeText}>
                        Welcome!
                    </Typography>
                    <Typography className={classes.subText} noWrap={true}>
                        Complete these 3 easy steps to create an account. If you don’t have time<br /> to fill in all information than you can skip them and add it later.
                    </Typography>
                    <Link to='/Admin/Component/Stapper/StapperMain' style={{textDecoration:'none'}}>
                        <CustomButton text="Start"  />
                    </Link>
                </Grid>
                <Grid container>
                    <img src={clubSport} alt='sport' className={classes.clubSportImg} />
                </Grid>
            </Grid>
   
        </div>
        </DrawerSide>
    )
}

export default Welcome