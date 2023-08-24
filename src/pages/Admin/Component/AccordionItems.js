import {
  Container,
  FormControl,
  Grid,
  makeStyles,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from "@material-ui/core"
import React from "react"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import CustomToogle from "./CustomToogle"
import clsx from "clsx"

const useStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    margin: "10px",
    display: "flex", width: "100%", alignItems: "center"
  },
  gridRoot: {
    backgroundColor: "white",
    padding: "8px",
    borderRadius: "10px",
    width: "100%",
    display: "flex",
  },
  gridMainRoot: {
    display: "flex",
  },
  selectRoot: {
    border: "none",
    borderRadius: "10px",
    backgroundColor: "white",
    height: "40px",
    width: "89px",
    justifyContent: "center",
    textAlign: "center"
  },
  root2:{
    display: "flex",
  justifyContent: "space-between",
  width: "100%",
  columnGap:60
  },
  dataRoot:{
    display: "flex",
  justifyContent: "space-between",
  width: "100%",
  columnGap: "16px"
  },
  customToggle:{
    background: "white",
  display: "flex",
  alignItems: "center",
  borderRadius: "10px"
  }
}))

const CustomExpandMore = withStyles(iconStyles)(
  ({ className, classes, ...rest }) => {
    return (
      <ExpandMoreIcon
        {...rest}
        className={clsx(className, classes.selectIcon)}
      />
    )
  }
)

const iconStyles = {
  selectIcon: {
    color: "green",
  },
}

function AccordionItems({ label, isChecked }) {
  const [preTime, setPreTime] = React.useState(2)
  const [postTime, setPostTime] = React.useState(2)

  const handleChange = event => {
    setPreTime(event.target.value)
  }

  const handleTeChange = event => {
    setPostTime(event.target.value)
  }
  const classes = useStyle()
  return (
    <div className={classes.root}>
     <div  className={classes.root2}>
          <div className={classes.customToggle}>
          <CustomToogle label={label} isChecked={isChecked} />
          </div>
          <div className={classes.dataRoot}>
            <FormControl style={{ width: "100%", marginLeft: "5px" }}>
              <Select
                className={classes.selectRoot}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={preTime}
                displayEmpty
                IconComponent={CustomExpandMore}
                label="Age"
                onChange={handleChange}
                disableUnderline
              >
                {" "}
                <MenuItem value={1}>7:00</MenuItem>
                <MenuItem value={2}>8:00</MenuItem>
                <MenuItem value={3}>9:00</MenuItem>
                <MenuItem value={4}>10:00</MenuItem>
                <MenuItem value={5}>11:00</MenuItem>
                <MenuItem value={6}>12:00</MenuItem>
              </Select>
            </FormControl>
            <Typography style={{ alignItems: "center", display: "flex" }}>
              -
            </Typography>
            <FormControl style={{ width: "100%", marginLeft: "5px" }}>
              <Select
                className={classes.selectRoot}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={postTime}
                displayEmpty
                IconComponent={CustomExpandMore}
                label="Age"
                onChange={handleTeChange}
                disableUnderline
              >
                <MenuItem value={1}>13:00</MenuItem>
                <MenuItem value={2}>14:00</MenuItem>
                <MenuItem value={3}>15:00</MenuItem>
                <MenuItem value={4}>16:00</MenuItem>
                <MenuItem value={5}>17:00</MenuItem>
                <MenuItem value={30}>18:00</MenuItem>
                <MenuItem value={30}>19:00</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
    </div>
  )
}

export default AccordionItems
