import { IconButton, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import DrawerSelect from './Utils/DrawerSelect';
import DrawerTextField from './Utils/DrawerTextField';
import DrawerButton from './Utils/DrawerButton';
import flag from '../../../../../images/flagIcon.svg'
import addClubIcon from "../../../../../images/booking_plus.svg"
import minClubIcon from "../../../../../images/booking_min.svg"
import line from "../../../../../images/lineBook.svg"
import SelectWithIcon from '../../SelectWithImage/SelectWithIcon';
import DrawerWithSelectFlag from './Utils/DrawerWithSelectFlag';

import EditClubItem from './Utils/EditClubItem';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        fontFamily: [
            'DM Sans'
        ].join(','),

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
        fontFamily: [
            'DM Sans'
        ].join(','),

    },
    rootForm: {
        width: '100%',
        height: '100%',

    },
    rootMainForm: {
        paddingLeft: '15px',
        paddingRight: '15px '
    },
    dateTime: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginRight: '10px'
    },
    rootButton: {
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', bottom: '0', right: '0', position: 'absolute',
        marginBottom: '20px',


    },
    subButton: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginRight: '25px',
        marginTop: '10px'
    },
    typoTitle: {
        fontFamily: 'DM Sans',
        fontSize: '30px',
        fontWeight: 400,

    },
    phoneRoot: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }

}))
function EditClub({ close }) {
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

    const DATA_PRICE = [
        { label: "SE", value: 1, icon: flag },
        { label: "SE", value: 2, icon: flag },
        { label: "SE", value: 3, icon: flag },
    ];

    const DATA_CODE = [
        { label: "+46", value: 1, icon: flag },
        { label: "+46", value: 2, icon: flag },
        { label: "+46", value: 3, icon: flag },
    ];

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

    return (
        <div className={classes.root}>
            <div className={classes.titleRoot}>
                <Typography className={classes.typoTitle} style={{ margin: '13px' }}>Edit Club Info</Typography>
                <IconButton onClick={close}>
                    <CloseIcon style={{ margin: '13px' }} />
                </IconButton>
            </div>
            <div className={classes.rootForm}>
                <div className={classes.rootMainForm}>
                    <div style={{ marginRight: '10px' }}>
                        <DrawerTextField placeHolder="ClubName" label="Club name" />
                    </div>
                    <div className={classes.dateTime}>

                        <div style={{ marginLeft: '9px' }}>
                            <DrawerWithSelectFlag placeHolder="SE" data={DATA_PRICE} label="Location" />
                        </div>
                        <div style={{ width: '70%' }}>
                            <DrawerTextField placeHolder="Time" label='Address' />
                        </div>

                        <div style={{ width: '45%', marginRight: '10px' }}>
                            <DrawerTextField placeHolder=" Time" label='Postal code' />
                        </div>
                    </div>
                    <div style={{ marginRight: '10px' }}>
                        <DrawerTextField placeHolder="Website" label="Website" />
                    </div>
                    <div style={{ marginRight: '10px' }}>
                        <DrawerTextField placeHolder="Email" label="Email" />
                    </div>
                    <div className={classes.phoneRoot}>
                        <div style={{ width: '20%', marginLeft: '9px' }}>
                            <DrawerWithSelectFlag data={DATA_CODE} placeHolder="+46" label="Phone" />
                        </div>
                        <div style={{ width: '80%', marginLeft: '10px', marginRight: '10px' }}>
                            <DrawerTextField placeHolder="725022505" label="&nbsp;&nbsp;" />
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            float: "left",
                            marginLeft: "0px",
                            marginTop: '5px',

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
                            Advanced settings{" "}
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
                    <div >
                        {formFields.map(index => {
                            return (
                                <div key={index}>
                                    <EditClubItem
                                        handleDeleteClick={() => removeFields(index)}
                                    />
                                </div>
                            )
                        })}
                    </div>
                     
                </div>
                
            </div>
            <div className={classes.rootButton}>
                    <div className={classes.subButton}>
                        <DrawerButton text="Save" />
                        </div>
                </div>
        </div>
    )
}

export default EditClub