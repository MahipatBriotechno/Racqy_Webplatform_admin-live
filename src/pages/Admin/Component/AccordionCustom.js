import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button, Checkbox, Container, FormControlLabel, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import Add from '@material-ui/icons/Add'
import AccordionItems from './AccordionItems';
import AddCourtItems from './Drawer/Screen/Forms/AddCourtItems';
import addClubIcon from '../../../images/plus_add_club.svg'
import minusAddClubIcon from '../../../images/minus_add_club.svg'
import AddBillingItems from './Drawer/Screen/Forms/AddBillingItems';
import deleteIcon from '../../../images/delete_icon.svg'
import AddCourtAccordian from './AddCourtAccordian';
import line from "../../../images/line.svg"
import BookingAccordianItem from './Shedule/Drawer/Utils/BookingAccordianItem';
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
    },
    labelRoot: {
        marginLeft: '19px',
        color: '#B7B7BF',
        fontSize: '14px',
        fontFamily: 'DM Sans'
    }


}))

function AccordionCustom({ label, userType }) {
    const classes = useStyle();
    const [expanded, setExpanded] = React.useState('');
    const [display, setDisplay] = useState(false);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleClick = () => {
        setDisplay(true)
    }
    return (

        <Container maxWidth='lg' >
            <Accordion expanded={expanded === "panel1"} className={classes.root} onChange={handleChange('panel1')}>

                <FormControlLabel
                    style={{ marginRight: '-13px', marginLeft: '-43px' }}
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
                    label={
                        userType === "addClub" ? "Opening Hours" : "" || userType === "addCourt" ? "Add Court" : "" || userType === "addBilling" ? "Add billing" : "" || userType === "booking" ? "Notify customer of booking issue" : ""
                    }
                />
                <AccordionDetails className={classes.summaryRoot} style={{ width: '100%', marginRight: '224px' }}>

                    {
                        userType === "addClub" ?
                            <div>
                                <Typography className={classes.labelRoot}>Drag the button if you club is closed on shown day</Typography>
                                <AccordionItems label="Monday" isChecked={true} />
                                <AccordionItems label="Tuesday" isChecked={true} />
                                <AccordionItems label="Wednesday" isChecked={true} />
                                <AccordionItems label="Thursday" isChecked={true} />
                                <AccordionItems label="Friday" isChecked={true} />
                                <AccordionItems label="Saturday" isChecked={true} />
                                <AccordionItems label="Sunday" isChecked={true} />
                                <AccordionItems label="Holidays" isChecked={false} />
                            </div>

                            : ""
                    }

                    {
                        userType === "addBilling" ? <AddBillingItems /> : ""
                    }
                    {
                        userType === "booking" ? <BookingAccordianItem /> : ""
                    }

                </AccordionDetails>

            </Accordion>
        </Container>



    )
}

export default AccordionCustom