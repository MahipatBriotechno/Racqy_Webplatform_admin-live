import React from "react"
import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core"
import DrawerSide from "../../Drawer/DrawerSide"
import BillingCard from "./BillingCard"
import BillingTitle from "../../../../../images/billingIcon.svg"
import BillingDrawerWrapper from "../../Shedule/Drawer/BillingDrawerWrapper"
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
  WarapCard: {
    display: "flex",
    columnGap: 11,
    color: "#0a3133ba",
  },
  textTitleWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    rowGap: 8,
  },
  detailWrap: {
    display: "flex",
    flexDirection: "column",
    rowGap: 8,
  },
  IconeDive: {
    display: "flex",
    alignItems: "center",
    columnGap:17
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ContentWrapper:{
    display: "flex",
    flexDirection: "column",
    padding:20,
    rowGap:10

  },
  EditTitle:{
    color: "#0a3133ba",
    "&:hover":{
        cursor:'pointer'
    }
  }
}))

const Billing = () => {
  const classes = useStyles()
  const [drawerOptions, setDrawerOptions] = React.useState({
    open: false,
    content: "",
  })
  const handleClose = () => {
    setDrawerOptions({ open: false, content: "" })
  }
  return (
    <DrawerSide>
      <div style={{ width: "100%" }}>
        <div className={classes.subContent}>
          <Typography className={classes.typoTitle}>Billing</Typography>
        </div>
        <div className={classes.contentRoot}>
          <BillingCard>
            <div className={classes.ContentWrapper}>
              <div className={classes.titleWrapper}>
                <div className={classes.IconeDive}>
                  <img src={BillingTitle} width={50}/>
                  <span>Billing information</span>
                </div>
                <span className={classes.EditTitle}
                onClick={() => {
                    setDrawerOptions({ open: true, content: "EditBill" })
                  }}
                >Edit</span>
              </div>
              {
                drawerOptions.open?
                <div className={classes.WarapCard}>
                <div className={classes.textTitleWrap}>
                  <span>Bank:</span>
                  <span>Company name:</span>
                  <span>VAT Number:</span>
                  <span>IBAN:</span>
                  <span>Account number:</span>
                  <span>BIC:</span>
                  <span>Country:</span>
                </div>
                <div className={classes.detailWrap}>
                  <span>Swedbank</span>
                  <span>Padel United AB</span>
                  <span>SE55679238412</span>
                  <span>SE**** **** **** 5446</span>
                  <span>**** **** **** 5446</span>
                  <span>********12</span>
                  <span>Sweden</span>
                </div>
              </div>
                :
                <div className={classes.WarapCard}>
                <div className={classes.textTitleWrap}>
                  <span>Company name:</span>
                  <span>VAT Number:</span>
                  <span>Country:</span>
                  <span>Bank:</span>
                  <span>IBAN:</span>
                  <span>BIC:</span>
                  <span>Adress:</span>
                </div>
                <div className={classes.detailWrap}>
                  <span>Padel United AB</span>
                  <span>SE55679238412</span>
                  <span>Sweden</span>
                  <span>Swedbank</span>
                  <span>SE45 5000 0000 0583 9825 7466</span>
                  <span>SWEDSESSXXX</span>
                  <span>Rinkebyvägen 61</span>
                </div>
              </div>
              }
            
            </div>
          </BillingCard>
        </div>
      </div>
      <BillingDrawerWrapper
        handleClose={handleClose}
        open={drawerOptions.open}
        content={drawerOptions.content}
      />
    </DrawerSide>
  )
}
export default Billing
