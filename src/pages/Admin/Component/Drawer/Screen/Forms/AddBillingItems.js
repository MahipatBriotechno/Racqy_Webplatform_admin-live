import { Container, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import FormTextField from '../../../FormTextField';
import NormalSelect from '../../../SelectWithImage/NormalSelect';
import flag from '../../../../../../images/flagIcon.svg'
import AccordionCustom from '../../../AccordionCustom';
import SelectWithIcon from '../../../SelectWithImage/SelectWithIcon';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transprent',
        width: '90%',
        borderRadius: '10px 10px 0px 0px',
        height: '100%',
        paddingTop: '10px',
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

function AddBillingItems() {
    const classes = useStyles();
    const [selected, setSelected] = useState("");
    const handleChange = (e) => {
        const name = e.target.value;
        setSelected(name.slice(0, 2));
    }

    const DATA_COUNTRY = [
        { label: "Tennis", value: 1 },
        { label: "Football", value: 2 },
        { label: "Cricket", value: 3 },
    ];

    const DATA_BANK = [
        { label: "SwedBank", value: 1 },
        { label: "Football", value: 2 },
        { label: "Cricket", value: 3 },
    ];

    const DATA_PRICE = [
        { label: "SE", value: 1, icon: flag },
        { label: "SE", value: 2, icon: flag },
        { label: "SE", value: 3, icon: flag },
    ];
    return (
        <div className={classes.root}>
            <Container maxWidth='lg'>
                <Grid item container direction='row' alignItems='center' justifyContent='space-arround' alignContent='space-between' spacing="4" >
                    <Grid item xs={6} container style={{ paddingRight: '10px', position: 'relative' }}>
                        <FormTextField placeHolder="Company Name" label="Company Name" />
                        <FormTextField placeHolder="VAT number" label="VAT number" />
                        <Grid style={{ display: 'flex', width: '100%', justifyContent: 'space-around', marginBottom: '1px' }}>
                            <div style={{ width: '100%' }}>
                                <NormalSelect data={DATA_COUNTRY} placeHolder="Country" label="Country" />
                            </div>
                            <div style={{ width: '100%' }}>
                                <NormalSelect data={DATA_BANK} placeHolder="Bank" label="Bank" />
                            </div>

                        </Grid>
                        <FormTextField placeHolder="IBAN" label="IBAN" />
                        <FormTextField placeHolder="BIC" label="BIC" />
                        <Grid style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }} >
                            <div style={{ display: 'flex', flexDirection: 'row', justifyItems: 'center', marginRight: '-46px', width: '100%', marginTop: '2px' }}>

                                <SelectWithIcon data={DATA_PRICE} placeHolder="Country" label="ClubPhone" />
                            </div>
                            <FormTextField placeHolder="Address" label="Address" />
                            <FormTextField placeHolder="Postal code" label="Postal code" />
                        </Grid>
                    </Grid>

                </Grid>

            </Container>
        </div>
    )
}

export default AddBillingItems