import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Container } from "@material-ui/core";
import { useStyles } from "./RightbarStyle";

const Days = [
    { day: "Monday", date: "09:00-22:00" },
    { day: "Tuesday", date: "09:00-22:00" },
    { day: "Wednesday ", date: "09:00-22:00" },
    { day: "Thursday", date: "09:00-22:00" },
    { day: "Friday", date: "09:00-22:00" },
    { day: "Saturday", date: "09:00-22:00" },
    { day: "Sunday", date: "09:00-22:00" },
    { day: "*Holidays", date: "09:00-22:00" },
];
const Contact = [
    { day: "Phone", date: "+46725022505" },
    { day: "Email", date: "info@catellaarena.se" },
    { day: "Website ", date: "catellaarena.com" },
];


const RightSidebar = () => {
    const classes = useStyles();

    const Item = ({ image, title }) => {
        return (
            <Box className="item">
                <img src={image} />
                <span>{title}</span>
            </Box>
        );
    };
    return (
        <>
            <Grid item>
                <Box className={classes.shadowBox}>
                    <h4 className="title">Club opening hours</h4>
                    {Days.map((data) => (
                        <Box className={classes.day}>
                            <h4 className="daytext">{data.day}</h4>
                            <h4 className="date">{data.date}</h4>
                        </Box>
                    ))}
                </Box>
                <Box className={classes.shadowBox}>
                    <h4 className="title">Contact</h4>
                    {Contact.map((data) => (
                        <Box className={classes.day}>
                            <h4 className="daytext">{data.day}</h4>
                            <h4 className="date">{data.date}</h4>
                        </Box>
                    ))}
                </Box>
            </Grid>
        </>
    );
};

export default RightSidebar;