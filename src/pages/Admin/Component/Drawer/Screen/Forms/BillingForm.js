import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import AccordionCustom from '../../../AccordionCustom'
import FormTextField from '../../../FormTextField'
import clubInfoImg from '../../../../../../images/clubInfoimg.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transprent',
        width: '100%',
        borderRadius: '10px 10px 0px 0px',
        height: '100%',
        paddingTop: '10px',
        paddingLeft: '40px',
        fontFamily: 'DM Sans',
    },
    titleText: {
        fontSize: '28px',
        marginBottom: '40px',
        fontWeight: '400',
        fontStyle: 'normal',

    },
    boxRoot: {

        width: '100%'


    },
    profileStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#B7B7BF',
        fontSize: '20',
        margin: '10px'
    },
    logoStyle: {
        marginBottom: '10px'
    },
    flagSelect: {
        background: 'white',
        border: 'none',
        borderRadius: 10,
        position: 'relative',
        display: 'flex',
        padding: '12px'
    },
    flagRoot: {

    }

}))

function BillingForm() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Grid item container direction='row' alignItems='center'  >
                    <Grid item xs={6} container style={{ paddingRight: '80px' }}>
                        <Typography className={classes.titleText}>
                            3. Log in & Billing
                        </Typography>
                        <FormTextField placeHolder="Your Name" label="Your Name" />
                        <FormTextField placeHolder="Your Email" label="Your Email" />
                        <FormTextField placeHolder="Password" label="Password" />
                        <FormTextField placeHolder="ReEnter Password" label="ReEnter Password" />
                    </Grid>
                    <Grid item container xs={6} alignItems="center">
                        <img src={clubInfoImg} />
                    </Grid>
                    <AccordionCustom userType="addBilling" />
                </Grid>

            </div>
        </div>
    )
}

export default BillingForm