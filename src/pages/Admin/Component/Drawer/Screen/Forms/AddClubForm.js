import {
  Container,
  FormControl,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core"
import React, { useState } from "react"
import ReactFlagsSelect from "react-flags-select"
import CountryDropdown from "country-dropdown-with-flags-for-react"
import logo from "../../../../../../images/add_club_logo.svg"
import AccordionCustom from "../../../AccordionCustom"
import FormTextField from "../../../FormTextField"
import flag from "../../../../../../images/flagIcon.svg"
import SelectWithImage from "../../../SelectWithImage/SelectWithImage"
import SelectWithIcon from "../../../SelectWithImage/SelectWithIcon"
import clubInfoImg from "../../../../../../images/clubInfoimg.svg"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transprent",
    width: "80%",
    borderRadius: "10px 10px 0px 0px",
    height: "100%",
    paddingTop: "10px",
    paddingLeft: "40px",
    fontFamily: "DM Sans",
  },
  titleText: {
    fontSize: "28px",
    marginBottom: "40px",
    fontWeight: "400",
    fontStyle: "normal",
  },
  boxRoot: {
    width: "100%",
  },
  profileStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#B7B7BF",
    fontSize: "20",
    margin: "10px",
    width:'100%'
  },
  logoStyle: {
    marginBottom: "10px",
  },
  flagSelect: {
    background: "white",
    border: "none",
    borderRadius: 10,
    position: "relative",
    display: "flex",
    padding: "12px",
  },
  flagRoot: {},
  containerClass:{
    display:'flex'
  }
}))

function AddClubForm() {
  const [selected, setSelected] = useState("")
  const handleChange = e => {
    const name = e.target.value
    setSelected(name.slice(0, 2))
  }
  const classes = useStyles()

  const DATA_FLAG = [
    { label: "SE", icon: flag, value: 1 },
    { label: "SE", icon: flag, value: 2 },
    { label: "india", icon: flag, value: 3 },
  ]

  const DATA_CODE = [
    { label: "+46", icon: flag, value: 1 },
    { label: "+56", icon: flag, value: 2 },
    { label: "+46", icon: flag, value: 3 },
  ]

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
      <div className={classes.containerClass}>
      <Grid container  style={{width:'56%'}}>
          <div style={{width:'100%'}}>
            <Typography className={classes.titleText}>
              1. Add Club Info
            </Typography>
            <div className={classes.profileStyle}>
              <img src={logo} alt="logo" className={classes.logoStyle} />
              <Typography>Club profile picture</Typography>
            </div>
          </div>
          <div style={{width:'100%'}}>
          <FormTextField
              label="Club name"
              placeHolder="Catella Arena (G2G)"
            />
            <Grid
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
              justifyContent="space-between"
            >
              <Grid
                style={{
                  marginRight: "-40px",
                  flexDirection: "column",
                  width: "97%",
                  paddingLeft: "3px",
                }}
              >
                <SelectWithIcon
                  data={DATA_FLAG}
                  placeholder="Select Location"
                  label="Location"
                />
              </Grid>
              <FormTextField label="Address" placeHolder="Address" />
              <FormTextField label="Postal code" placeHolder="Postal Code" />
            </Grid>
            <FormTextField
              label="Club website (optional)"
              placeHolder="Club website (optional)"
            />
            <FormTextField label="Club email" placeHolder="Club email" />
            <Grid
              direction="row"
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
             
              <Grid
                style={{
                  marginRight: "-40px",
                  width: "100%",
                  flexDirection: "column",
                  width: "97%",
                  paddingLeft: "3px",
                }}
              >
                <SelectWithIcon
                  data={DATA_CODE}
                  placeholder="Select Location"
                  label="Select Location"
                />
              </Grid>
              <FormTextField label="" placeHolder="Phone Number" />
            </Grid>

            <AccordionCustom userType="addClub" />
          </div>

          
          
        </Grid>
        <div style={{
            width: "50%",
            position: "ABSOLUTE",
            top: "139px",
            right: "-195px"
        }}>
        <img
              src={clubInfoImg}
              width="300px"
              style={{ padding: "40px", marginTop: "60px" }}
            />
        </div>
      </div>
      </Container>
    </div>
  )
}

export default AddClubForm
