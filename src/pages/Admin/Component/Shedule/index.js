import React, { useState } from "react"
import DrawerSide from "../Drawer/DrawerSide"
import "./Shedule.css"
import $ from "jquery"
import PersonOutlineIcon from "@material-ui/icons/PersonOutline"
import ScheduleIcon from "@material-ui/icons/Schedule"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import TextField from "@material-ui/core/TextField"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { IconButton } from "@material-ui/core"
import Moment from "moment"
import Pepole from "../../Assets/peopleSheduleIcon.svg"
import Clock from "../../Assets/clockIconSchelude.svg"
import Schedule from "../../Assets/scheduleIcontop.svg"
import { makeStyles } from "@material-ui/core/styles"
import DynamicDrawer from "./Drawer/DynamicDrawer"
import { ButtonColor } from "../../ThemeFile/ButtonColor"
const useStyles = makeStyles(theme => ({
  widgetDiv: {
    background: "white",
    width: "95%",
    height: "83px",
    borderLeft: "4px solid #209CA2",
    borderRadius: "10px 0px 0px 5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: "7px",
    paddingTop: "8px",
    paddingLeft: "6px",
    borderRadius: '8px',
    marginTop: '-46px',
    marginBottom: '-74px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
  },
  imgWrapper: {
    display: "flex",
    alignItems: "center",
    columnGap: "7px",
  },
  imgWrapper1: {
    display: "flex",
    alignItems: "center",
    columnGap: "3px",
    justifyContent: "space-between",
    width: "90%",
  },
  TextWrapper: {
    display: "flex",
    alignItems: "center",
    columnGap: "7px",
  },
  Section: {
    border: "1px solid rgb(128 128 128 / 15%)",
    marginBottom:'20px',
    borderRadius: "15px",
  },
  CreateButton: {
    background: `${ButtonColor} !important`,
  
    color: "white !important",
    textTransform: "capitalize !important",
    borderRadius: "10px !important",
    "&:hover": {
      background: `${ButtonColor} !important`,
    },
  },
  Header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  thText: {
    fontSize: '12px',
    fontFamily: 'Plus Jakarta Sans',
    color: '#0A3133',
    border: "none",
    fontWeight: '500',
  },
  boxTitle: {
    color: '#0A3133',
    fontSize: '12px',
    fontFamily: 'Plus Jakarta Sans'
  },
  subTitle: {
    color: '#B7B7BF',
    fontSize: '9px',
    fontFamily: 'Plus Jakarta Sans'
  },
  tdRoot: {
    background: "#FAFAFC",
    border: "0.5px solid #80808045",
    width: '400px',
    padding: 0,
  },
  tdActive: {
    borderBottom: 'red'
  }
}))
const Shedule = () => {
  const [drawerOptions, setDrawerOptions] = useState({ open: false, content: "" });

  const handleClose = () => {
    setDrawerOptions({ open: false, content: "" });
  }

  const classes = useStyles()
  const [DateValue, setDateValue] = React.useState(
    Moment().format("YYYY-MM-DD")
  )
  const NextDate = value => {
    setDateValue(Moment(value).add(1, "days").format("YYYY-MM-DD"))
  }
  const PreviousDate = value => {
    setDateValue(Moment(value).subtract(1, "days").format("YYYY-MM-DD"))
  }
  const Events = [
    {
      eventName: "Skogsfors1",
      secondaryName: 'Skogsfors 1',
      subName: 'Inomhus bana'
    },
    {
      eventName: "CollectorBank2",
      secondaryName: 'CollectorBank 2',
      subName: 'Inomhus bana'
    },
    {
      eventName: "Skogsfors3",
      secondaryName: 'Skogsfors 3',
      subName: 'Utomhus bana'
    },
    {
      eventName: "CollectorBank4",
      secondaryName: 'CollectorBank 4',
      subName: 'Inomhus bana'
    },
    {
      eventName: "Skogsfors4",
      secondaryName: 'Skogsfors 4',
      subName: 'Inomhus bana'
    },
  ]
  const SheduleTime = [
    {
      time: "9",
      newTime: "9:00"
    },
    {
      time: "11",
      newTime: "11:00"
    },
    {
      time: "12",
      newTime: "12:00"
    },
    {
      time: "13",
      newTime: "13:00"
    },
    {
      time: "14",
      newTime: "14:00"
    },
    {
      time: "15",
      newTime: "15:00"
    },
    {
      time: "16",
      newTime: "16:00"
    },
  ]
  const data = [
    {
      eventName: "CollectorBank4",
      time: "16",
      name: "hello",
    },

    {
      eventName: "CollectorBank2",
      time: "11",
      name: "hello",
    },

    {
      eventName: "Skogsfors1",
      time: "13",
      name: "hello",
    },
    {
      eventName: "Skogsfors3",
      time: "14",
      name: "hello",
    },
    {
      eventName: "Skogsfors4",
      time: "9",
      name: "hello",
    },
    {
      eventName: "test5",
      time: "13",
      name: "hello",
    },
    {
      eventName: "test6",
      time: "13",
      name: "hello",
    },
  ]
  React.useEffect(() => {
    for (var i = 0; i < data.length; i++) {
      $("#" + data[i].eventName + "-" + data[i].time).html(
        `<div class=${classes.widgetDiv}><div class=${classes.imgWrapper1}><div class=${classes.TextWrapper}><img src=${Pepole} ></img><span class=${classes.boxTitle}>Test Name</span></div> <div><img src=${Schedule} ></img></div> </div><div class=${classes.imgWrapper}><img src=${Clock} ></img><span class=${classes.boxTitle}>10:00-11:00</span></div></div>`
      )

    }
  }, [])
  return (
    <DrawerSide>
      <div style={{ marginLeft: -38 }}>
        <div className={classes.Header}>
          <span className="header-text">Shedule</span>
          <div className="date-div">
            <Button className={classes.CreateButton} onClick={() => {
              setDrawerOptions({ open: true, content: "new-booking" });
            }}>
              <AddIcon />
              Create Booking
            </Button>

            <div className="icon-wrapper">
              <IconButton
                className="icon-back-arrow"
                onClick={() => PreviousDate(DateValue)}
              >
                <ArrowBackIosIcon />
              </IconButton>

              <TextField
                variant="outlined"
                className="input-text"
                id="date"
                type="date"
                size="small"
                value={DateValue}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <IconButton
                className="icon-forwed-arrow"
                onClick={() => NextDate(DateValue)}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className={classes.Section}>
          <div className="time-picker-container" id="time-picker-container">
            <table className="tardis">
              <tbody>
                <tr>
                  <td className="corner" style={{ border: "none" }} >
                    &nbsp;
                  </td>
                  {Events.map(dt => {
                    return <th style={{ textAlign: 'left',verticalAlign:'bottom',paddingBottom:'10px' }} className={classes.thText} >{dt.secondaryName}<br /><span className={classes.subTitle}>{dt.subName}</span></th>
                  })}
                </tr>

                {SheduleTime.map(dt => {
                  return (
                    <tr>
                      <th className={classes.thText} style={{ border: '1px solid #F3F3F7', width: 150, verticalAlign: 'top' }}>{dt.newTime}</th>
                      {Events.map(t => {
                        return (
                          <td
                            onClick={() => {
                              setDrawerOptions({ open: true, content: "booking" });
                            }}
                            id={t.eventName + "-" + dt.time}

                            className={dt.time === "9" ? 'active' : classes.tdRoot}

                          >{console.log(dt.time)}</td>
                        )
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <DynamicDrawer handleClose={handleClose} open={drawerOptions.open} content={drawerOptions.content} />
      </div>
    </DrawerSide>
  )
}
export default Shedule
