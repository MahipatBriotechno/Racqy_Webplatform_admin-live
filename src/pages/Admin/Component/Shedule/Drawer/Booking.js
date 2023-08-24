import { IconButton, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import DrawerSelect from './Utils/DrawerSelect';
import DrawerTextField from './Utils/DrawerTextField';
import DrawerButton from './Utils/DrawerButton';
import DrawerRedButton from './Utils/DrawerRedButton';
import DrawerTextWithIcon from './Utils/DrawerTextWithIcon';
import AccordionCustom from '../../AccordionCustom';
import addClubIcon from "../../../../../images/booking_plus.svg"
import minClubIcon from "../../../../../images/booking_min.svg"
import line from "../../../../../images/lineBook.svg"
import BookingAccordianItem from './Utils/BookingAccordianItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    titleRoot: {
        width: '97%',
        display: 'flex',
        marginTop: '40px',
        marginBottom: '30px',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '15px',
    },
    rootForm: {
        width: '100%',
    },
    rootMainForm: {
        paddingLeft: '15px',
        paddingRight: '15px '
    },
    dateTime: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '10px',
    },
    rootButton: {
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', bottom: '0', right: '0', position: 'absolute',
        marginBottom: '20px',

    },
    subButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: '25px'
    },
    typoTitle: {
        fontFamily: 'DM Sans',
        fontSize: '30px',
        fontWeight: 400
    },
    rootPrice: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

}))

function Booking({ close }) {
    const DATA_COURT = [
        { label: "Court 1", value: 1 },
        { label: "Court 2", value: 2 },
        { label: "Court 3", value: 3 },
    ]

    const DATA_TIME = [
        { label: "11:00", value: 1 },
        { label: "11:00", value: 2 },
        { label: "11:00", value: 3 },
    ]

    const DATA_DATE = [
        { label: "14/7", value: 1 },
        { label: "14/7", value: 2 },
        { label: "14/7", value: 3 },
    ]


    const DATA_TIME_2 = [
        { label: "12:00", value: 1 },
        { label: "12:00", value: 2 },
        { label: "12:00", value: 3 },
    ]
    const classes = useStyles();

    const [formFields, setFormFields] = useState([])
    const [selected, setSelected] = useState("")
    const [plus, setPlus] = useState(false);

    const addFields = () => {
        setFormFields([...formFields, "dummy"])
        setPlus(true)
    }

    const removeFields = index => {
        let data = [...formFields]
        data.splice(index, 1)
        setFormFields(data)
        setPlus(false)
    }

    const handleClickPlus = () => {
        setPlus(true)
    }
    return (
        <div className={classes.root}>
            <div className={classes.titleRoot}>
                <Typography className={classes.typoTitle} style={{ margin: '13px' }}>Booking</Typography>
                <IconButton onClick={close}>
                    <CloseIcon style={{ margin: '13px' }} />
                </IconButton>
            </div>
            <div className={classes.rootForm}>
                <div className={classes.rootMainForm}>
                    <div style={{ marginRight: '10px' }}>
                        <DrawerTextField placeHolder="Booked court" label="Booked court" />
                    </div>
                    <div className={classes.dateTime}>
                        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: '0px' }}>
                            <DrawerTextField align="center" placeHolder="Today" label="Date & Time" />
                        </div>
                        <div style={{ display: 'flex', direction: 'column', width: '100%', marginLeft: '10px', marginRight: '10px', alignItems: 'center', justifyContent: 'space-between', }}>
                            <DrawerTextField placeHolder="Time" label='&nbsp;&nbsp;' />
                            <Typography style={{ marginTop: '15px', marginLeft: '5px' }}>-</Typography>
                            <DrawerTextField placeHolder="Time" label='&nbsp;&nbsp;' />
                        </div>
                    </div>
                    <div style={{ marginRight: '10px' }}>
                        <DrawerTextField placeHolder="Customer name" label="Customer name" />
                    </div>
                    <div className={classes.rootPrice}>
                        <div style={{ width: '20%',marginRight:'10px',marginLeft:'5px' }}>
                            <DrawerTextWithIcon placeHolder="Price" label="Price" />
                        </div>
                        <div style={{ width: '100%', marginRight: '10px', marginLeft: '20px' }}>
                            <DrawerTextField placeHolder="400" label="" />
                        </div>
                    </div>


                    <div className={classes.rootButton}>
                        <div className={classes.subButton}>
                            <DrawerRedButton text="Refund Customer" />
                        </div>

                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            float: "left",
                            marginLeft: "0px",
                            marginTop: '5px'

                        }}
                    >
                        {
                            plus === false ?
                                <img
                                    src={addClubIcon}
                                    onClick={addFields}
                                    alt="add"
                                    style={{ marginLeft: "10px" }}
                                /> :
                                <img
                                    src={minClubIcon}
                                    onClick={removeFields}
                                    alt="add"
                                    style={{ marginLeft: "10px" }} />

                        }
                        <Typography style={{ fontFamily: "DM Sans", fontSize: "15px", marginLeft: '20px' }}>
                            Notify customer of booking issue{" "}
                        </Typography>

                        <br />
                    </div>
                    <br />
                    <img
                        src={line}
                        style={{
                            width: 300,
                            marginTop: "10px",
                            marginBottom: "10px",
                            paddingLeft: "30px",
                        }}
                    />
                    <div>
                        {formFields.map(index => {
                            return (
                                <div key={index}>
                                    <BookingAccordianItem
                                        handleDeleteClick={() => removeFields(index)}
                                    />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Booking