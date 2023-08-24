import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Container, FormControlLabel, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

import flag from '../../../images/flagIcon.svg'
import SelectWithIcon from '../Component/SelectWithImage/SelectWithIcon';
import addClubIcon from '../../../images/plus_add_club.svg'
import minusAddClubIcon from '../../../images/minus_add_club.svg'
import deleteIcon from '../../../images/delete_icon.svg'
import FormTextField from './FormTextField';
import NormalSelect from './SelectWithImage/NormalSelect';


const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
        border: 'none',
        position: 'inherit',
        boxShadow: 'none',
        width: '100%',
        justifyContent: 'center',
        ".MuiCollapse-entered": {
            padding: 0,
            margiLeft: '-26px',
        }
    },

    summaryRoot: {
        marginLeft: '-27px',
        padding: 0,
        width: '100%',

    },

    newRoot: {
        visibility: 'hidden',
    }


}))

function AddCourtAccordian() {


    const DATA_SPORT = [
        { label: "Tennis", value: 1 },
        { label: "Football", value: 2 },
        { label: "Cricket", value: 3 },
    ];

    const DATA_OUTIN = [
        { label: "Outside", value: 1 },
        { label: "Inside", value: 2 },
    ];

    const DATA_STATUS = [
        { label: "Private", value: 1 },
        { label: "Public", value: 2 },
    ];

    const DATA_BOOKING = [
        { label: "60 min", value: 1 },
        { label: "70 min", value: 2 },
    ];

    const DATA_PRICE = [
        { label: "SEK", value: 1, icon: flag },
        { label: "SEK", value: 2, icon: flag },
        { label: "SEK", value: 3, icon: flag },
    ];

    const DATA_COURT_FEU = [
        { label: "Clay", value: 1, },
        { label: "Clay", value: 2, },
        { label: "Clay", value: 3, },
    ];

    const classes = useStyle();
    const [expanded, setExpanded] = useState('');
    const [display, setDisplay] = useState(false);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = () => {
        setDisplay(true)
    }
    return (
        <div>
            <Accordion expanded={expanded === "panel1"} className={classes.root} onChange={handleChange('panel1')}>

                <FormControlLabel
                    aria-label="Acknowledge"
                    onClick={(event) => event.stopPropagation()}
                    onFocus={(event) => event.stopPropagation()}
                    control={
                        <AccordionSummary
                            expandIcon={expanded === 'panel1' ? <img src={minusAddClubIcon} alt="minus" /> : <img src={addClubIcon} alt='more' />}
                            aria-label="Expand"
                            aria-controls="additional-actions1-content"
                            id="additional-actions1-header"

                        />

                    }
                    label="Add Court"
                />
                <AccordionDetails className={classes.summaryRoot} style={{ width: '100%' }}>
                    <Container maxWidth='lg'>
                        <Grid item container direction='row' style={{ width: '109%' }} alignItems='center'  >
                            <Grid item xs={12} container  >
                                <FormTextField placeHolder="Court 1" label="Court Name" />
                                <Grid style={{ display: 'flex', flexGrow: 1, marginBottom: '10px', alignItems: 'center' }}>
                                    <NormalSelect data={DATA_SPORT} placeHolder="Select Sport" label="Sports" />
                                    <NormalSelect data={DATA_OUTIN} placeHolder="Outside" label="Outside/Inside" />
                                </Grid>
                                <Grid style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <NormalSelect data={DATA_COURT_FEU} placeHolder="Clay" label="Court features" />
                                    <FormTextField placeHolder="440" label="Price" />
                                    <Grid style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                        <SelectWithIcon data={DATA_PRICE} placeHolder="Select Sport" label="" />
                                    </Grid>
                                </Grid>
                                <Grid style={{ display: 'flex', width: '100%', alignItems: "center" }}>
                                    <NormalSelect data={DATA_STATUS} placeHolder="Status" label="Status" />
                                    <NormalSelect data={DATA_BOOKING} placeHolder="Booking length" label="Booking length" />

                                </Grid>

                            </Grid>



                        </Grid>



                    </Container>
                </AccordionDetails>
                <AccordionActions >
                    <img src={deleteIcon} alt="delete" style={{ float: 'right', display: 'flex', flexDirection: 'row', width: '50px', margin: '10px', }} onClick={handleClick} />
                </AccordionActions>
            </Accordion>
        </div>
    )
}

export default AddCourtAccordian