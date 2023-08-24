import {
  Box,
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
import addClubIcon from "../../../../../../images/plus_add_club.svg"
import line from "../../../../../../images/line.svg"
import SelectWithImage from "../../../SelectWithImage/SelectWithImage"
import NormalSelect from "../../../SelectWithImage/NormalSelect"
import clubInfoImg from "../../../../../../images/clubInfoimg.svg"
import SelectWithIcon from "../../../SelectWithImage/SelectWithIcon"
import AddCourtAccordian from "../../../AddCourtAccordian"
import AddCourtItems from "./AddCourtItems"


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "transprent",
    width: "100%",
    borderRadius: "10px 10px 0px 0px",
    height: "100%",
    paddingTop: "10px",
    paddingLeft: "21px",
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
  DivSelect: {
    display: "flex",
  },
  DivSelect2: {
    display: "flex",
  },
  DivSelect3: {
    display: "flex",
  },
  selectIcon:{
    "&>div .css-b62m3t-container":{
        paddingRight:'56px !important',
        marginTop:'11px'
    }
  }
}))

function AddCourtForm() {
  const [formFields, setFormFields] = useState([])
  const [selected, setSelected] = useState("")
  const addFields = () => {
    setFormFields([...formFields, "dummy"])
  }

  const removeFields = index => {
    let data = [...formFields]
    data.splice(index, 1)
    setFormFields(data)
  }
  const classes = useStyles()

  const DATA_SPORT = [
    { label: "Tennis", value: 1 },
    { label: "Football", value: 2 },
    { label: "Cricket", value: 3 },
  ]

  const DATA_OUTIN = [
    { label: "Outside", value: 1 },
    { label: "Inside", value: 2 },
  ]

  const DATA_STATUS = [
    { label: "Private", value: 1 },
    { label: "Public", value: 2 },
  ]

  const DATA_BOOKING = [
    { label: "60 min", value: 1 },
    { label: "70 min", value: 2 },
  ]

  const DATA_PRICE = [
    { label: "SEK", value: 1, icon: flag },
    { label: "SEK", value: 2, icon: flag },
    { label: "SEK", value: 3, icon: flag },
  ]

  const DATA_COURT_FEU = [
    { label: "Clay", value: 1 },
    { label: "Clay", value: 2 },
    { label: "Clay", value: 3 },
  ]

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{marginLeft:22}}>
        <Typography className={classes.titleText}>2. Add Courts</Typography>
        <Box style={{display:'flex'}}>
          <div>
            <Grid item container>
              <Grid md={12}>
               <div style={{width:'100%'}}> <FormTextField placeHolder="Court 1" label="Court Name" /></div>
                <div className={classes.DivSelect}>
                 <div style={{width:'50%'}}>
                 <NormalSelect
                    data={DATA_SPORT}
                    placeHolder="Select Sport"
                    label="Sports"
                  />
                 </div>
                 <div style={{width:'50%'}}>
                 <NormalSelect
                    data={DATA_OUTIN}
                    placeHolder="Outside"
                    label="Outside/Inside"
                  />
                 </div>
                  
                </div>
                <div className={classes.DivSelect2}>
                  <div  style={{width:'50%'}}>
                  <NormalSelect
                    data={DATA_COURT_FEU}
                    placeHolder="Clay"
                    label="Court features"
                  />
                  </div>
                  <div style={{display:'flex',width:'50%'}}>
                   <div style={{width:'100%'}}>
                     <FormTextField placeHolder="440" label="Price" />
                   </div>

                    <div style={{width:'100%',marginTop:'13px'}} className={classes.selectIcon}>
                      <SelectWithIcon
                        data={DATA_PRICE}
                        placeHolder="Select.."
                        label=""
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.DivSelect3}>
                  <div style={{ width: "100%" }}>
                    <NormalSelect
                      data={DATA_STATUS}
                      placeHolder="Status"
                      label="Status"
                    />
                  </div>
                  <div style={{ width: "100%" }}>
                    <NormalSelect
                      data={DATA_BOOKING}
                      placeHolder="Booking length"
                      label="Booking length"
                    />
                  </div>
                  <br />
                </div>
                <Grid md={12}>
                   {formFields.map(index => {
                return (
                  <div key={index}>
                    <AddCourtItems
                      handleDeleteClick={() => removeFields(index)}
                    />
                  </div>
                )
              })}
                </Grid>
              </Grid>

             
            </Grid>
          </div>
          <div>
            <img
              src={clubInfoImg}
              width="300px"
              style={{
                right:100,
                top:224,
                position: "absolute",
              }}
            />
          </div>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            float: "left",
            marginLeft: "12px",
          }}
        >
          <Typography style={{ fontFamily: "DM Sans", fontSize: "15px" }}>
            Add Court{" "}
          </Typography>
          <img
            src={addClubIcon}
            onClick={addFields}
            alt="add"
            style={{ marginLeft: "5px" }}
          />
          <br />
        </div>
        <br />
        <img
          src={line}
          style={{
            width: 505,
            marginTop: "10px",
            marginBottom: "10px",
            paddingLeft: "10px",
          }}
        />
      </Container>
    </div>
  )
}

export default AddCourtForm
