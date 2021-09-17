import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Box,Typography} from '@material-ui/core';
import Logo from "../Assets/logo.png";
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { ShoppingCart } from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position:'relative',
    zIndex:2,
    fontFamily:"Montserrat"
  },
  grow: {
    flexGrow: 1,
  },
  logo:{
  width:192,
  height:68
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navtitle:{
   color:'#1D1111',
   fontSize:17,
   fontWeight:'bold',
   fontFamily:"Montserrat",
   marginLeft:15,
   marginRight:15
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  secondNav:{
    display:"none",
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
}));

export default function Header() {
  const classes = useStyles();
  const [scroll,setScroll]=useState(false)


  const Scrollevent=()=>{
    if(window.scrollY >= 70){
      setScroll(true)
      console.log('scroll touched',window.scrollY)
    }else if(window.scrollY < 70){
      setScroll(false)
    }
  }

  window.addEventListener('scroll',Scrollevent);

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={1} style={{backgroundColor:'#FFFFFF',height:'72px',justifyContent:"center",marginBottom:1}}>
        <Toolbar>
          <img src={Logo} className={classes.logo}/>
          <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Typography className={classes.navtitle}>Products</Typography>
              <Typography className={classes.navtitle}>Platform</Typography>
              <Typography className={classes.navtitle}>Company</Typography>
              <Typography className={classes.navtitle}>Resources</Typography>
              <Typography className={classes.navtitle}>Customer</Typography>
              <Typography className={classes.navtitle}>Support</Typography>
            </div>  
        </Toolbar>
      </AppBar>
      <AppBar position='static' elevation={0} className={classes.secondNav} style={{backgroundColor:'#FFFFFF',height:scroll?'51px':'70px',justifyContent:"center",alignItems:'center',zIndex:2}}>
           <Box style={{height:"100px",width:"50%",display:"flex",justifyContent:"space-evenly",alignItems:"flex-end",flexDirection:"row"}}>
                <Box style={{height:"50px",width:"70px",display:'flex',justifyContent:"center",alignItems:"center",position:"relative"}}>
                  <Typography style={{fontWeight:"bold",color:'#5B5D52',fontSize:"17px"}} >About</Typography>
                  <div style={{height:'10px',width:"70px",backgroundColor:"#4D89F5",position:'absolute',bottom:0}}></div>
                </Box>
                <Box style={{height:"50px",width:"70px",display:'flex',justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <Typography style={{fontWeight:"normal",color:'#848484',fontSize:"17px"}} >Why</Typography>
                </Box>
                <Box style={{height:"50px",width:"70px",display:'flex',justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <Typography style={{fontWeight:"normal",color:'#848484',fontSize:"17px"}} >Speakers</Typography>
                </Box>
                <Box style={{height:"50px",width:"70px",display:'flex',justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <Typography style={{fontWeight:"normal",color:'#848484',fontSize:"17px"}} >Agenda</Typography>
                </Box>
           </Box>
      </AppBar>
    </div>
  );
}
