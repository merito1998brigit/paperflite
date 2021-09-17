import React,{useEffect,useState} from 'react'
import background from "../Assets/mainBackground.jpg";
import Aboutpage from "./Aboutpage";
import Video from "../Assets/video.png";
import { Link } from "react-router-dom";
import mainBlob from "../Assets/mainpageBlob.png";
import { Grid,Card,CardContent,CardActionArea,CardActions,Button,CardMedia,Typography} from "@material-ui/core";
import axios from "axios";

export default function Listview() {
    return (<>
        <Grid container style={{height:'100vh',backgroundImage:`url(${background})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',position:"relative",overflowX:"hidden"}}>
          <img src={mainBlob} style={{position:"absolute",top:-100,right:-50,height:'200px',width:'150px',zIndex:0}} />
           <div style={{height:"100%",width:"100%",backgroundColor:'rgb(44, 112, 221,0.5)',display:'flex',flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
             <div style={{position:"relative",zIndex:5}}>
              <Grid xs={12} item style={{display:"flex",justifyContent:"center",alignItems:'center',marginTop:"100px",marginBottom:'67px'}}>
              <img src={Video} width="325px" height="227px"/>
              </Grid>
              <Grid item xs={12}  style={{display:"flex",justifyContent:"center",alignItems:'center',flexGrow:1,marginBottom:'50px '}}>
                  <Button variant="outlined" style={{color:"white",fontWeight:"bold",backgroundColor:"transparent",border:"2px solid white",width:"188px",height:'47px',borderRadius:"0px"}}>
                   Watch trailer</Button>
              </Grid>
              <Grid item xs={12} style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center"}} > 
                 <Typography style={{color:"#FFFFFF",fontSize:'17px',fontWeight:"bold",fontFamily:"Montserrat"}} >Date: 3rd August 2021</Typography>
                 <Typography style={{color:"#FFFFFF",fontSize:'17px',fontWeight:"bold",fontFamily:"Montserrat"}} >Time: 3.00 PM Dubai / 1.00 PM SAST</Typography>
              </Grid>
             </div>
          </div>
        </Grid>
        <Aboutpage/>
        </>
    )
}
