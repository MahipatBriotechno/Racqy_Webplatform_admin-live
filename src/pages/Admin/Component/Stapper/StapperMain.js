import {
  Button,
  CircularProgress,
  makeStyles,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  withStyles,
} from "@material-ui/core"
import React, { Fragment, useState } from "react"
import AddClubForm from "../Drawer/Screen/Forms/AddClubForm"
import AddCourtForm from "../Drawer/Screen/Forms/AddCourtForm"
import BillingForm from "../Drawer/Screen/Forms/BillingForm"
import useStyles from "./styles"
import clsx from "clsx"
import PropTypes from "prop-types"
import activeLine from "../../../../images/active_line.svg"
import disableLine from "../../../../images/dis_line.svg"
import { Formik, Form } from "formik"
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"
import DrawerSide from "../Drawer/DrawerSide"
import { Link as GatsByLink } from "gatsby"
import { ButtonColor } from "../../ThemeFile/ButtonColor"

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
    display: "none",
  },
})(StepConnector)

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: "200px",
    height: 2,
    borderBottom: "2px",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
})

const useStyle = makeStyles(theme => ({
  root: {
    marginRight: "40%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  rootMain: {
    backgroundColor: "#F9FAFC",
    borderRadius: "15px",
    paddingBottom: "20%",
    width: "100%",
  },
  buttonBack: {
    backgroundColor: "#B7B7BF",
    "&:focus": {
      outline: 0,
      border: 0,
    },
    marginRight: "20px",
    marginLeft: "-20px",
    color: "white",
    width: "25%",
  },
  buttonNext: {
    backgroundColor: `${ButtonColor}`,
    "&:hover":{
      backgroundColor:`${ButtonColor}`
    },
    "&:focus": {
      outline: 0,
      border: 0,
      backgroundColor: `${ButtonColor}`,
    },
    marginLeft: "10px",
    color: "white",
    width: "25%",
  },
  buttonRoot: {
    margin: "10px",
    width: "50%",
    marginTop: "40px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  ButtonFinal:{
    color: "white",
  width: "25%",
  backgroundColor:`${ButtonColor}`,
  boxShadow: "NONE",
  justifyContent: "CENTER",
  display: "FLEX",
  textDecoration: "NONE",
  marginLeft: "0PX",
  borderRadius: "7PX",
  "&:hover":{
    backgroundColor: `${ButtonColor} !important`,
    boxShadow: "NONE",
}
  }
}))

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddClubForm />
    case 1:
      return <AddClubForm />
    case 2:
      return <AddCourtForm />
    case 3:
      return <BillingForm />
  }
}

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"]
}

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles()
  const { active, completed, isActive } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <img src={activeLine} /> : <img src={disableLine} />}
    </div>
  )
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,

  isActive: PropTypes.bool,
}

function StapperMain() {
  //const steps = ['Shipping address', 'Payment details', 'Review your order'];
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(1)

  const steps = getSteps()
  const isFirst = activeStep === 0
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }
  const classesforStpper = useStyle()
  return (
    <DrawerSide>
      <div className={classesforStpper.rootMain}>
        <div style={{ marginLeft: "4.5rem" }}>
          <Stepper
            className={classesforStpper.root}
            alternativeLabel
            activeStep={activeStep}
            connector={<QontoConnector />}
          >
            {steps.map(label => (
              <Step active={activeStep === 0 ? true : false} key={label}>
                {" "}
                <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <div>
          {activeStep === steps.length + 1 ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {" "}
                {_renderStepContent(activeStep)}
              </Typography>
              <div className={classesforStpper.buttonRoot}>
                <Button
                  disableRipple
                  disableElevation
                  disabled={activeStep === 1}
                  onClick={handleBack}
                  className={classesforStpper.buttonBack}
                >
                  Back
                </Button>
                {activeStep === 3 ? (
                  <GatsByLink to="/Admin/Pages/Shedule" className={classesforStpper.ButtonFinal}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={()=>localStorage.setItem("drawer",true)}
                      focusRipple={false}
                      disableRipple
                      className={classesforStpper.ButtonFinal}
                    >
                      Finish
                    </Button>
                  </GatsByLink>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    focusRipple={false}
                    disableRipple
                    className={classesforStpper.buttonNext}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </DrawerSide>
  )
}

export default StapperMain
