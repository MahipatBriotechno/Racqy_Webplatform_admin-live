import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import React, { useState } from "react"
import forwardIcon from "../../../../images/forward_icon.svg"
import DrawerSide from "../Drawer/DrawerSide"
import SettingCard from "./SettingCard"
import peopleIcon from "../../../../images/people_icon.svg"
import courtIcon from "../../../../images/court_icon.svg"
import billingIcon from "../../../../images/rev_icon.svg"

import { Link } from "gatsby"
const useStyles = makeStyles(theme => ({
  shadowBox: {
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 5%) 0px 0px 0px 1px",
    marginBottom: "30px",
    borderRadius: "10px",
    barder: "1px solid #EAEAED",
    padding: "10px",
    "& .titleGray": {
      color: "#B4B4BC",
      fontSize: "15px",
      fontFamily: "DM Sans",
      fontWeight: 300,
    },
    background: "white",
    "& .imgGray": {
      width: "60px",
      marginRight: "10px",
    },
  },
  contentRoot: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
  rowImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginLeft: "10px",
    padding: "10px",
  },
  numRoot: {
    color: "#000000",
    fontSize: "30px",
    fontFamily: "DM Sans",
    marginRight: "20px",
  },
  tagGreen: {
    background: "#EAFADD",
    borderRadius: "10px",
    color: "#67B724",
    paddingRight: "15px",
    paddingLeft: "10px",
    fontSize: "12px",
  },
  tagRed: {
    background: "#FFDBE1",
    borderRadius: "10px",
    color: "#FD6E84",
    paddingRight: "15px",
    paddingLeft: "10px",
    fontSize: "12px",
  },
  typoTitle: {
    fontSize: "25px",
    fontFamily: "Plus Jakarta Sans",
    color: "#0A3133",
    marginBottom: "20px",
    fontWeight: 400,
  },
  subContent: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "20px",
  },
  contentRoot: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
    background: "#F9FAFC",
    border: "1px solid rgb(128 128 128 / 15%)",
    borderRadius: "15px",
  },
}))

function Settings() {
  const classes = useStyles()
  
 
  return (
    <DrawerSide>
      <div>
        <div
          className={classes.subContent}
         
        >
          <Typography className={classes.typoTitle}>Settings</Typography>
        </div>
        <div className={classes.contentRoot}>
          <Link to="/Admin/Component/Settings/CourtSetting/" style={{textDecoration:'none', width: "30%" }}>
            <div >
              <SettingCard
                desc="Add or change information about your courts so customers know what to expect when booking."
                title="court"
                icon={courtIcon}
              />
            </div>
          </Link>
          <Link to="/Admin/Component/Settings/MangeUser/" style={{textDecoration:'none', width: "30%" }}>
          <div >
            <SettingCard
              desc="Add or change administration of users for your facility,Aor your facility
                     
                        "
              title="Manage users"
              icon={peopleIcon}
            />
          </div>
          </Link>
          <Link to="/Admin/Component/Settings/Billing/" style={{textDecoration:'none', width: "30%" }}>
          <div>
            <SettingCard
              desc="Change billing information to receive payment for bookings."
              title="Billing"
              icon={courtIcon}
            />
          </div>
          </Link>
        </div>
      </div>
      
    </DrawerSide>
  )
}

export default Settings
