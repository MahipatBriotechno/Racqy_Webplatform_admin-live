import { Button, Link, makeStyles, Paper, SvgIcon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from '@material-ui/core'
import btnimg from '../../../../../images/Group_1667.svg'
import threeLine from '../../../../../images/three_line.svg'
import React from 'react'
import DrawerSide from '../../Drawer/DrawerSide';
import UserDrawerWrapper from "../../Shedule/Drawer/UserDrawerWrapper"
import { ButtonColor } from '../../../ThemeFile/ButtonColor';
const useStyles = makeStyles((theme) => ({

  typoTitle: {
    fontSize: '25px',
    fontFamily: 'Plus Jakarta Sans',
    color: '#0A3133',
    marginBottom: '20px',
    fontWeight: 400,
  },
  subContent: {
    width: '100%', display: 'flex', justifyContent: 'flex-start', marginTop: '20px'
  },
  contentRoot: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    padding: '10px',
    paddingTop: '40px',

    background: '#F9FAFC',
    border: "1px solid rgb(128 128 128 / 15%)",
    borderRadius: "15px",
  },

}))

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.gray,
  },
  body: {
    fontSize: 14,
    
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.grey[50],
    },
    '&:nth-of-type(odd)': {
       backgroundColor: theme.palette.grey[50],
    },
  },
}))(TableRow);






function CourtSetting() {
  const classes = useStyles();
  const [drawerOptions, setDrawerOptions] = React.useState({
    open: false,
    content: "",
  })
  const handleClose = () => {
    setDrawerOptions({ open: false, content: "" })
  }
  function createData(name, email, permission, status) {
    return { name, email, permission, status };
  }
  
  const rows = [
    createData(<Button style={{textTransform:"initial"}}
    onClick={() => {
      setDrawerOptions({ open: true, content: "EditUser" })
    }}
    ><img src={threeLine}/><pre style={{marginLeft:"10px"}}>Mahipat vaghela</pre></Button>, `test@gmail.com`, `read`, `Bookable`),
    createData(<Button style={{textTransform:"initial"}}><img src={threeLine}/><pre style={{marginLeft:"10px"}}>Akash prajapati</pre></Button>, `test@gmail.com`, `read`, `Bookable`),
    createData(<Button style={{textTransform:"initial"}}><img src={threeLine}/><pre style={{marginLeft:"10px"}}>Druve Bhatiya</pre></Button>, `test@gmail.com`, `read`, `Bookable`),
    createData(<Button style={{textTransform:"initial"}}><img src={threeLine}/><pre style={{marginLeft:"10px"}}>Janvi</pre></Button>, `test@gmail.com`, `read`, `Bookable`),
    
  ];
  
  return (
    <>

     <DrawerSide>
      
      <TableContainer style={{marginTop:"5%"}}  >
      <Link href="#" underline="always" ><span style={{color:"#B4B4BC",fontSize:"15px"}}>Setting</span></Link>
      <Button style={{backgroundColor:`${ButtonColor}`,display:'flex',marginLeft:"90%",color:"white",width:"188px",marginLeft:"82%",borderRadius:"12px 12px"}}>
        <img src={btnimg} style={{color:"white",height:"9px"}}/><span style={{marginLeft:"3%",textTransform:"initial"}}
        onClick={() => {
          setDrawerOptions({ open: true, content: "NewUser" })
        }}
        >New User</span></Button>
      <div style={{fontSize:"30px",marginBottom:"5%",display:'flex',marginTop:"-3%"}}>Manage User</div>
      
        <div style={{position:'absolute',left:182,width:'87%'}}>
        <Table aria-label="customized table"  style={{border:'1px solid #80808036',borderCollapse:'unset',borderRadius:15,borderSpacing:0}}> 
         
         <TableHead >
           <TableRow >
             <StyledTableCell style={{borderRadius:'20px 0px 0px 0px'}} >name</StyledTableCell>
             <StyledTableCell align="left">Email</StyledTableCell>
             <StyledTableCell align="left">Permission</StyledTableCell>
             <StyledTableCell align="left">Status</StyledTableCell>
           </TableRow>
         </TableHead>
         <TableBody style={{height:'100%'}}>
           {rows.map((row) => (
             <StyledTableRow key={row.name}>
               <TableCell component="th" scope="row" style={{borderRight:'1px solid #80808036',borderBottom:'1px solid rgb(224 224 224 / 37%)'}}>
                 {row.name}
               </TableCell>
               <StyledTableCell align="left" style={{borderRight:'1px solid #80808036',borderBottom:'1px solid rgb(224 224 224 / 37%)'}}>{row.email}</StyledTableCell>
               <StyledTableCell align="left" style={{borderRight:'1px solid #80808036',borderBottom:'1px solid rgb(224 224 224 / 37%)'}}>{row.permission}</StyledTableCell>
               <StyledTableCell align="left" style={{color:"#209CA2"}}>{row.status}</StyledTableCell>
                </StyledTableRow>
           ))}
         </TableBody>
        </Table> 
        </div>
      </TableContainer>
      <UserDrawerWrapper
        handleClose={handleClose}
        open={drawerOptions.open}
        content={drawerOptions.content}
      />
    </DrawerSide> 
    </>
  )
}

export default CourtSetting