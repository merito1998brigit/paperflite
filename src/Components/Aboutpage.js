import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Influence from '../Assets/influence.png'
import AttendBlob from "../Assets/attendBlob.png";
import clock from '../Assets/clock.png'
import speakerBlob from "../Assets/speakerBlob.png";
import speakerBlob2 from "../Assets/speakerBlob2.png";
import speaker1 from '../Assets/speaker1.png'
import AddIcon from '@material-ui/icons/Add';
import speaker2 from '../Assets/speaker2.png'
import speaker3 from '../Assets/speaker3.png'
import Union from '../Assets/Union.png'
import speaker4 from '../Assets/speaker4.png'
import Linkedin from '../Assets/Linkedin.png'
import AgendaBlob1 from '../Assets/AgendaBlob1.png'
import AgendaBlob2 from '../Assets/AgendaBlob2.png'
import Meeting from '../Assets/Meeting.png'
import speaker5 from '../Assets/speaker5.png'
import aboutBlob from "../Assets/aboutBlob.png";
import aboutBlob2 from "../Assets/aboutBlog2.png";
import aboutBlob3 from "../Assets/aboutBlob3.png";
import speaker6 from '../Assets/speaker6.png'
import speakerback1 from '../Assets/speakerback1.png'
import speakerback2 from '../Assets/speakerback2.png'
import yelllowcircle from '../Assets/yellowcircle.png'
import greycicle from '../Assets/greyCircle.png'
import Rectangle from '../Assets/Rectangle .png'
import RectangleBlue from '../Assets/RectangleBlue.png'
import Book from "../Assets/Book.png";
import Network from '../Assets/Network.png'
import { Grid,Card,CardContent,CardActionArea,CardActions,Button,CardMedia,Typography,TextField,Box} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
   aboutlayout:{
    display:'flex',
    flexDirection:'column-reverse',
    position:'relative',
    overflowX:'hidden',
    overflowY:"hidden",
    zIndex:3,
    [theme.breakpoints.up('md')]: {
        flexDirection:'row',
      },
   },
   registerblock:{
 //   backgroundColor:'red',
    height:"80vh",
    padding:'20px',
    marginBottom:'50px',
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.up('md')]: {
        alignItems:'flex-start',
      },
    [theme.breakpoints.up('xl')]: {
        height:'50vh'
      },
   },
   aboutblock:{
  //  backgroundColor:'blue',
    height:"80vh",
    display:'flex',
    padding:'20px',
    justifyContent:"center",
    alignItems:"center" ,
    [theme.breakpoints.up('md')]: {
        alignItems:'flex-end'
      },
      [theme.breakpoints.up('xl')]: {
        height:'50vh'
      },
   },
   attendTypes:{
     //  backgroundColor:'red',
       height:"fit-content",
       padding:'20px',
      // marginBottom:'50px',
       display:'flex',
       justifyContent:"center",
       alignItems:"flex-end",
       [theme.breakpoints.up('md')]: {
           height:'80vh',
         },
       [theme.breakpoints.up('xl')]: {
           height:'50vh'
         },
      },
      attendPara:{
    //   backgroundColor:'blue',
       height:"fit-content",
       display:'flex',
       padding:'20px',
       justifyContent:"center",
       alignItems:"flex-start" ,
       [theme.breakpoints.up('md')]: {
          height:'80vh'
         },
         [theme.breakpoints.up('xl')]: {
           height:'50vh'
         },
      },
   formdesign:{
       height:'fit-content',
       width:"300px",
       textAlign:"center",
       display:'flex',
       flexWrap:"wrap",
       justifyContent:"center",
       alignItems:"flex-start"
   },
   aboutdesign:{
    height:'fit-content',
    width:"300px",
    textAlign:"left",
    display:'flex',
    flexWrap:"wrap",
    justifyContent:"flex-start",
    alignItems:"flex-start"
},
   formlayout: {
    '& > *': {
      margin: theme.spacing(1),
      width: '23ch',
      display:"flex",
      flexWrap:'wrap',
      fontFamily:"Montserrat"
    },
  },
  attendHeader:{
    width:'100%',
    height:'fit-content',
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down('sm')]: {
        justifyContent:'flex-start'
      },
  },
  speakerHeader:{
    width:'100%',
    height:'fit-content',
    display:'flex',
    justifyContent:"flex-start",
    alignItems:"center",
    position:'relative',
    zIndex:3
  },
  speakerBlobCover:{
    position:'absolute',
    zIndex:0,
    top:50,
    left:-100,
    height:'100vh',
    width:'1500px',
    overflow:'hidden',
     [theme.breakpoints.up('xl')]: {
       height:'60vh'
      },
  },
  AgendaTopBorder:{
    backgroundColor:"#ADADAD",
    height:"1px",
    width:"100%",
    [theme.breakpoints.up('md')]: {
      width:"75%",
     },
  },
  AgendaUnderBorder1:{
    backgroundColor:"#ADADAD",
    height:"1px",
    width:"100%",
    [theme.breakpoints.up('md')]: {
      width:"49%",
      marginRight:'10px'
     },
  },
  AgendaUnderBorder2:{
     display:"none",
    [theme.breakpoints.up('md')]: {
      backgroundColor:"#ADADAD",
      height:"1px",
      width:"25%",
      display:"block"
     }
  },
  AgendaTimes:{
    display:'flex',
    alignItems:"center",
    width:'-webkit-fill-available',
    justifyContent:"space-between",
    flexDirection:"row",
    [theme.breakpoints.up('md')]: {
      flexDirection:"column",
      justifyContent:"center",
     }
  },
  AgendaTimeBlock:{
    height:'100px',
    width:'200px',
    display:"flex",
    justifyContent:"flex-start",
    alignItems:'center',
    paddingTop:"20px",
    paddingBottom:"20px"
  },
  aboutBlob1:{
    position:"absolute",
    top:-300,
    left:-350,
    height:'500px',
    transform:"rotate(10deg)",
    width:'500px',
    zIndex:1,
    [theme.breakpoints.up('md')]: {
      top:-200,
      left:-250,
      height:'500px',
      transform:"rotate(15deg)",
      width:'500px',
     }
  }
}))

export default function Aboutpage() {
    const classes = useStyles();
    return (<>
        <div id="About" style={{height:'fit-content',width:"100%",backgroundColor:'white',position:'relative',zIndex:3,overflowY:"visible"}}>
          <img src={aboutBlob} className={classes.aboutBlob1} />
              <div style={{position:"absolute",zIndex:0,left:100,top:150}}>
                 <div style={{position:"relative",width:'200px',height:'200px'}}>
                   <img src={greycicle} style={{width:'200px',height:"200px",position:"absolute"}} />
                   <img src={Rectangle} style={{width:'100px',height:'50px',position:'absolute',top:40}}/>
                  </div> 
               </div>
            <div style={{width:"100%",overflowX:'hidden',height:"fit-content",position:'relative',zIndex:3}}>
                <Box style={{display:"flex",justifyContent:"center",alignItems:"end",height:'65px',width:"100%",flexWrap:"wrap-reverse"}}>
                   <Box p={1} m={1} style={{color:"black",fontWeight:"bold",fontSize:'16px'}} >
                     North America
                   </Box>
                   <Box p={1} m={1} style={{color:'#4C8AF5',fontSize:"16px"}} >
                      Europe
                  </Box>
                  <Box p={1} m={1} style={{color:'#4C8AF5',fontSize:"16px"}} >
                      MEA
                  </Box>
                  <Box p={1} m={1} style={{color:'#4C8AF5',fontSize:"16px"}} >
                      India and ASEAN
                  </Box>
                  <Box p={1} m={1} style={{color:'#4C8AF5',fontSize:"16px"}} >
                      ANZ
                  </Box>
                </Box>
            </div>
            <Grid container className={classes.aboutlayout}> 
               <img src={aboutBlob2} style={{position:"absolute",zIndex:-1,width:'100px',height:"100px",top:200,right:-50}} />
               <img src={aboutBlob3} style={{position:"absolute",zIndex:-2,width:'800px',height:"600px",top:50,right:-200}} />
              <Grid item xs={12} md={6} className={classes.aboutblock}>
                <Box p={1}  className={classes.aboutdesign}>
                    <div style={{display:'flex',flexDirection:"column",alignItems:"flex-start",marginBottom:'10px'}}>
                      <Typography style={{color:'#000000',fontSize:'25px',fontWeight:'bold',marginBottom:'5px',fontFamily:"Montserrat"}} >About the event</Typography>
                      <div style={{height:'10px',backgroundColor:'black',width:'40px'}}></div>
                    </div>
                    <Typography noWrap={false} style={{fontSize:'13px',color:'#6F6F6F',fontWeight:'lighter',fontFamily:"Montserrat"}} >
                      At Freshworks, YOU, our customers, are our single biggest source of inspiration. This platform is about celebrating you — telling your stories, exchanging ideas, nurturing and growing the Freshworks community. The Virtual CSD by Freshworks will host an exciting line-up of speakers who have pioneered the values that put people first in business. Coupled together with world-class entertainment, this event will leave you feeling energized, inspired and entertained.
                    </Typography>
                    <Typography style={{color:'#1D1111',fontSize:"15px",marginTop:'10px',fontWeight:'bold',fontFamily:"Montserrat"}}>
                      This is an invite-only event exclusive to Freshworks customers with limited seats.
                    </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} className={classes.registerblock} >
                 <Box p={1} bgcolor="white" className={classes.formdesign}>
                     <Typography style={{color:'#000000',fontSize:'25px',fontWeight:'bold',fontFamily:"Montserrat"}} >Register for the event</Typography>
                     <form className={classes.formlayout} noValidate autoComplete="off">
                          <TextField id="standard-basic" label="Name" />
                          <TextField id="standard-basic" label="Business Email Id" />
                          <TextField id="standard-basic" label="Company Nmae" />
                          <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center",marginTop:"30px"}}>      
                            <Button style={{borderRadius:"0px",backgroundColor:"#4C8AF5",width:'190px',height:"40px",color:"white",marginBottom:'5px'}} >Save my seat</Button>
                            <Typography style={{textAlign:"left",fontSize:'12px',color:'#6F6F6F',fontStyle:"italic"}}>By clicking on SAVE MY SEAT, you acknowledge having read our Privacy Notice</Typography>
                         </div>
                     </form>
                  
                 </Box>
               </Grid>
           </Grid>
        </div>
        <div id="Attend" style={{height:'fit-content',width:"100%",backgroundColor:'white'}}>
             <Box className={classes.attendHeader} >
                 <div style={{display:'flex',height:'180px',margin:'20px',justifyContent:'flex-end',alignItems:"center",flexDirection:"column",position:'relative',zIndex:'2'}} >
                   <Typography style={{color:'#1D1111',fontWeight:'bold',fontSize:"35px",fontFamily:"Montserrat"}} >Why Attend</Typography>
                   <div style={{height:'10px',backgroundColor:'black',width:'40px'}} ></div>
                   <img src={AttendBlob} width='171px' height='171px' style={{position:'absolute',zIndex:-1,top:10}}/>
                 </div>  
             </Box>
             <Grid container>
                  <Grid item xs={12} md={6} className={classes.attendPara} >
                     <Box p={1} style={{height:'fit-content',width:"450px",marginTop:'20px',fontFamily:"Montserrat"}} >
                        <Typography style={{color:'#1D1111',fontWeight:"normal",fontSize:"20px",fontFamily:"Montserrat"}}>
                            Virtual Customer Success Day by Freshworks will host an exciting line-up of speakers who have pioneered the values that put people first in business. Coupled together with world-class entertainment, this event will leave you feeling energized, inspired, and entertained.
                        </Typography>
                     </Box>    
                  </Grid>   
                  <Grid item xs={12} md={6} className={classes.attendTypes}>
                     <Box p={1}  style={{height:'fit-content',width:"450px",display:'flex',flexDirection:"column"}} >
                         <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center",marginBottom:"10px"}}>
                           <img src={Influence} height="72px" width="79px" style={{marginRight:'20px'}} />
                           <div>
                             <Typography style={{fontWeight:'bold',fontSize:'18px',fontFamily:"Montserrat"}} >Influence</Typography>
                             <Typography style={{fontSize:'15px',color:'#6F6F6F',fontFamily:"Montserrat"}}>
                               Preview and influence our product roadmap to help us design experiences that will help you win customers for life.
                             </Typography>
                           </div>
                         </div>
                         <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center",marginBottom:"10px"}}>
                           <img src={Book} height="72px" width="79px" style={{marginRight:'20px',marginLeft:'10px'}} />
                           <div>
                             <Typography style={{fontWeight:'bold',fontSize:'18px',fontFamily:"Montserrat"}} >Learn & Be Inspired</Typography>
                             <Typography style={{fontSize:'15px',color:'#6F6F6F',fontFamily:"Montserrat"}}>
                              Unlock the full potential of freshworks products and deep dive into unique uses. Take away best pratices and learn how you can implement them in your organization.
                             </Typography>
                           </div>
                         </div>
                         <div style={{display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center",marginBottom:"10px"}}>
                           <img src={Network} height="72px" width="79px" style={{marginRight:'20px'}} />
                           <div>
                             <Typography style={{fontWeight:'bold',fontSize:'18px',fontFamily:"Montserrat"}} >Network</Typography>
                             <Typography style={{fontSize:'15px',color:'#6F6F6F',fontFamily:"Montserrat"}}>
                              Grow your network , take a step back and look at the big picture. Interact and network with peers in similar companies to exchange ideas on new use-cases and usage perspectives
                             </Typography>
                           </div>
                         </div>
                     </Box> 
                  </Grid> 
             </Grid>
        </div>
        <div id="Speakers" style={{height:'fit-content',width:"100%",backgroundColor:'white',position:"relative",zIndex:3,overflowX:"hidden",paddingBottom:'100px'}}>
              <div className={classes.speakerBlobCover}>
                <img src={speakerBlob2} style={{width:'1500px',height:"1100px"}}/>
              </div>
              <img src={speakerBlob} width='171px' height='171px' style={{position:'absolute',zIndex:0,top:0,left:10}}/>
             <Box className={classes.speakerHeader} >
                 <div style={{display:'flex',height:'180px',marginLeft:"60px",justifyContent:'center',alignItems:"flex-start",flexDirection:"column"}} >
                   <Typography style={{color:'#1D1111',fontWeight:'bold',fontSize:"35px",fontFamily:"Montserrat"}} >Our Speakers</Typography>
                   <div style={{height:'10px',backgroundColor:'black',width:'40px'}} ></div>
                 </div>  
             </Box>
             <Grid container  style={{justifyContent:"space-evenly",alignItems:'center',position:'relative',zIndex:5}} >
                 <Grid item xs={12} md={4} style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"20px"}} >
                    <img src={speaker1} height="360px" width="240px" />
                    <img src={Linkedin} style={{height:'32px',width:'32px',margin:'5px'}} />
                 </Grid>
                 <Grid item xs={12} md={4} style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"20px"}} >
                  <div style={{position:"relative",height:'280px',width:'200px',marginBottom:'10px'}}>   
                    <img src={speaker2} height="282px" width="180px" style={{position:"absolute",zIndex:1}} />
                    <img src={speakerback1} height="160px" width="170px" style={{position:"absolute",zIndex:0,bottom:0}} /> 
                    <img src={yelllowcircle} height="70px" width="70px" style={{position:"absolute",zIndex:2,bottom:0}} /> 
                  </div>
                  <Typography style={{color:'#4D4D4D',fontSize:'20px',fontWeight:"bold",fontFamily:"Montserrat"}} >Manish mishara</Typography>
                  <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}} >Business head ,MFA</Typography>
                  <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}}>Freasher</Typography>
                    <img src={Linkedin} style={{height:'32px',width:'32px',margin:'5px'}} />
                 </Grid>
                 <Grid item xs={12} md={4} style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"20px"}} >
                   <div style={{position:"relative",height:'280px',width:'200px',marginBottom:'10px'}}>   
                      <img src={speaker3} height="270px" width="170px" style={{position:"absolute",zIndex:1}} />
                      <img src={speakerback2} height="200px" width="200px" style={{position:"absolute",zIndex:0,right:0,bottom:0}} /> 
                      <img src={RectangleBlue} height="50px" width="100px" style={{position:"absolute",zIndex:2,bottom:0}} /> 
                    </div>
                    <Typography style={{color:'#4D4D4D',fontSize:'20px',fontWeight:"bold",fontFamily:"Montserrat"}} >Prashanth Bhaga</Typography>
                    <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}} >National Head of Fullfilment</Typography>
                    <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}}>Yellow page</Typography>
                    <img src={Linkedin} style={{height:'32px',width:'32px',margin:'5px'}} />
                 </Grid>
                 <Grid item xs={12} md={4} style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"20px"}} >
                   <div style={{position:"relative",height:'280px',width:'200px',marginBottom:'10px'}}>   
                      <img src={speaker4} height="282px" width="180px" style={{position:"absolute",zIndex:1}} />
                      <img src={speakerback1} height="160px" width="170px" style={{position:"absolute",zIndex:0,bottom:0}} /> 
                      <img src={yelllowcircle} height="70px" width="70px" style={{position:"absolute",zIndex:2,bottom:0}} /> 
                    </div>
                    <Typography style={{color:'#4D4D4D',fontSize:'20px',fontWeight:"bold",fontFamily:"Montserrat"}} >Ralf Lifshitz</Typography>
                    <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}} >Senior Manager Programe</Typography>
                    <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}}>Manager</Typography>
                    <img src={Linkedin} style={{height:'32px',width:'32px',margin:'5px'}} />
                 </Grid>
                 <Grid item xs={12} md={4} style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"20px"}} >
                 <div style={{position:"relative",height:'280px',width:'200px',marginBottom:'10px'}}>   
                      <img src={speaker5} height="282px" width="180px" style={{position:"absolute",zIndex:1}} />
                      <img src={speakerback1} height="160px" width="170px" style={{position:"absolute",zIndex:0,bottom:0}} /> 
                      <img src={yelllowcircle} height="70px" width="70px" style={{position:"absolute",zIndex:2,bottom:0}} /> 
                    </div>
                    <Typography style={{color:'#4D4D4D',fontSize:'20px',fontWeight:"bold",fontFamily:"Montserrat"}} >Berndon Emmanuel</Typography>
                    <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}} >Senior Manager Programe</Typography>
                    <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}}>Manager</Typography>
                      <img src={Linkedin} style={{height:'32px',width:'32px',margin:'5px'}} />
                 </Grid>
                 <Grid item xs={12} md={4} style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"20px"}} >
                 <div style={{position:"relative",height:'280px',width:'200px',marginBottom:'10px'}}>   
                      <img src={speaker6} height="282px" width="180px" style={{position:"absolute",zIndex:1}} />
                      <img src={speakerback2} height="170px" width="175px" style={{position:"absolute",zIndex:0,bottom:0}} /> 
                      <img src={yelllowcircle} height="70px" width="70px" style={{position:"absolute",zIndex:2,bottom:0}} /> 
                    </div>
                    <Typography style={{color:'#4D4D4D',fontSize:'20px',fontWeight:"bold",fontFamily:"Montserrat"}} >Berndon Emmanuel</Typography>
                    <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}} >Senior Manager Programe</Typography>
                    <Typography style={{color:'#848484',fontSize:'14px',fontWeight:"lighter",fontStyle:"italic",fontFamily:"Montserrat"}}>Manager</Typography>
                      <img src={Linkedin} style={{height:'32px',width:'32px',margin:'5px'}} />
                 </Grid>
             </Grid>       
        </div>
        <div id="Agenda" style={{height:'fit-content',width:"100%",backgroundColor:'#0C225F',position:"relative",zIndex:0,overflowX:"hidden"}}>
              <img src={AgendaBlob1} style={{position:"absolute",zIndex:1,height:"250px",width:"200px",top:-50,left:-75}} />
              <Box style={{height:'fit-content',width:"100%",display:"flex",justifyContent:"space-around",alignItems:'flex-end',flexWrap:'wrap',position:"relative",zIndex:3}}>
                     <Grid item></Grid>
                      <Grid item xs={12} md={5} style={{height:'170px',justifyContent:"center",alignItems:"center",display:'flex',flexDirection:'column'}}>
                        <div style={{textAlign:"left"}} >
                            <Typography style={{color:'#FFFFFF',fontSize:'30px',fontWeight:'bold',fontFamily:"Montserrat"}} >Agenda</Typography>
                            <div style={{display:"flex",flexWrap:"wrap",justifyContent:'flex-start',alignItems:"flex-start",flexDirection:'row'}}>
                              <Typography  style={{color:'#FFFFFF',fontSize:'20px',fontWeight:'lighter',marginRight:"15px",fontFamily:"Montserrat"}} >Thursday, June 24th</Typography>
                              <img src={clock} style={{marginRight:'15px',height:'32px',width:'32px'}}/>
                              <Typography  style={{color:'#FFFFFF',fontSize:'20px',fontWeight:'lighter',fontStyle:'italic',fontFamily:"Montserrat"}} >2hrs 30min</Typography>
                            </div>
                            <div style={{height:'10px',backgroundColor:'#FFFFFF',width:'30px'}} ></div>
                       </div>
                      </Grid>
                      <Grid item xs={12} md={5} style={{height:'170px',justifyContent:"center",alignItems:"center",display:'flex',flexDirection:'column'}}>
                         <Button style={{backgroundColor:'#ffa200',height:"47px",width:'225px',color:"white",fontWeight:"bold",borderRadius:"0px"}} >Register Here</Button>
                      </Grid>
                     <Grid item></Grid>
               </Box>
               <Grid container style={{width:"100%",paddingRight:'100px',paddingLeft:'100px',paddingTop:'50px',padding:"50px",position:"relative",zIndex:3}}>
                 {/* Welcome note */}
                   <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%",height:"2px"}}>
                     <div className={classes.AgendaTopBorder}/>
                   </div>
                   <Grid item xs={12} md={3} className={classes.AgendaTimeBlock} >
                     <div className={classes.AgendaTimes}>
                       <Typography style={{color:"white",fontSize:"19px",fontWeight:"lighter",fontFamily:"Montserrat"}} >10:15-10:30</Typography>
                       <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >15 mins</Typography>
                     </div>
                   </Grid>
                   <Grid item xs={12} md={6} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                      <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"25px",fontWeight:"bold",fontFamily:"Montserrat"}} >Welcome Note</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >CEOs welcome note to all existing customers</Typography>
                      </div>
                   </Grid>
                   <Grid item xs={12} md={3} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                       <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat"}} >Ralph Lifshitz</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Senior Managment Programe</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Management</Typography>
                      </div>
                   </Grid>
                   <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%",height:"2px"}}>
                      <div className={classes.AgendaUnderBorder1}/>
                      <div className={classes.AgendaUnderBorder2}/>
                   </div>


 {/* Key note */}

                    <Grid item xs={12} md={3} className={classes.AgendaTimeBlock} >
                     <div className={classes.AgendaTimes}>
                       <Typography style={{color:"white",fontSize:"19px",fontWeight:"lighter",fontFamily:"Montserrat"}} >10:15-10:30</Typography>
                       <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >15 mins</Typography>
                     </div>
                   </Grid>
                   <Grid item xs={12} md={6} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                      <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"25px",fontWeight:"bold",fontFamily:"Montserrat"}} >Keynote by the regional head</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >An outlook into the market</Typography>
                      </div>
                   </Grid>
                   <Grid item xs={12} md={3} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                       <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat"}} >Ralph Lifshitz</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Senior Managment Programe</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Management</Typography>
                      </div>
                   </Grid>
                   <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%",height:"2px"}}>
                      <div className={classes.AgendaUnderBorder1}/>
                      <div className={classes.AgendaUnderBorder2}/>
                   </div>
                    {/* Chronicles */}

                    <Grid item xs={12} md={3} className={classes.AgendaTimeBlock} >
                     <div className={classes.AgendaTimes}>
                       <Typography style={{color:"white",fontSize:"19px",fontWeight:"lighter",fontFamily:"Montserrat"}} >10:15-10:30</Typography>
                       <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >15 mins</Typography>
                     </div>
                   </Grid>
                   <Grid item xs={12} md={6} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                      <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"25px",fontWeight:"bold",fontFamily:"Montserrat"}} >Chronicles of Delight</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Customer Success Stories across CX, IT & CRM</Typography>
                      </div>
                   </Grid>
                   <Grid item xs={12} md={3} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                       <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat"}} >Ralph Lifshitz</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Senior Managment Programe</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Management</Typography>
                      </div>
                   </Grid>
                   <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%",height:"2px"}}>
                      <div className={classes.AgendaUnderBorder1}/>
                       <div className={classes.AgendaUnderBorder2}/>
                   </div>
 {/* Road map */}

                    <Grid item xs={12} md={3} className={classes.AgendaTimeBlock} >
                     <div className={classes.AgendaTimes}>
                       <Typography style={{color:"white",fontSize:"19px",fontWeight:"lighter",fontFamily:"Montserrat"}} >10:15-10:30</Typography>
                       <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >15 mins</Typography>
                     </div>
                   </Grid>
                   <Grid item xs={12} md={6} style={{width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                      <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"25px",fontWeight:"bold",fontFamily:"Montserrat"}} >Freshworks Roadmap I A Sneak Peek into the future of engagement</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >● Future of CX: Delivering moments of WOW</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >● Experience IT</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >● Unified CRM: Bringing Sales & Marketing together</Typography>
                      </div>
                   </Grid>
                   <Grid item xs={12} md={3} style={{width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px",flexDirection:"column"}} >
                       <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat"}} >Ralph Lifshitz</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Senior Managment Programe</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Management</Typography>
                      </div>
                      <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat"}} >Ralph Lifshitz</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Senior Managment Programe</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Management</Typography>
                      </div>
                      <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat"}} >Ralph Lifshitz</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Senior Managment Programe</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Management</Typography>
                      </div>
                   </Grid>
                   <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%",height:"2px"}}>
                       <div className={classes.AgendaUnderBorder1}/>
                       <div className={classes.AgendaUnderBorder2}/>
                   </div>
 {/* last note */}

                   <Grid item xs={12} md={3} className={classes.AgendaTimeBlock} >
                     <div className={classes.AgendaTimes}>
                       <Typography style={{color:"white",fontSize:"19px",fontWeight:"lighter",fontFamily:"Montserrat"}} >10:15-10:30</Typography>
                       <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >15 mins</Typography>
                     </div>
                   </Grid>
                   <Grid item xs={12} md={6} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                      <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"25px",fontWeight:"bold",fontFamily:"Montserrat"}} >Experience Freshworks</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Live demos across CX, IT & CRM</Typography>
                      </div>
                   </Grid>
                   <Grid item xs={12} md={3} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                       <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"18px",fontWeight:"bold"}} >Ralph Lifshitz</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Senior Managment Programe</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Management</Typography>
                      </div>
                   </Grid>
                   <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%",height:"2px"}}>
                     <div className={classes.AgendaUnderBorder1}/>
                     <div className={classes.AgendaUnderBorder2}/>
                   </div>

                   {/* final tag */}

                   <Grid item xs={12} md={3} className={classes.AgendaTimeBlock} >
                     <div className={classes.AgendaTimes}>
                       <Typography style={{color:"white",fontSize:"19px",fontWeight:"lighter",fontFamily:"Montserrat"}} >10:15-10:30</Typography>
                       <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >15 mins</Typography>
                     </div>
                   </Grid>
                   <Grid item xs={12} md={6} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                      <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"25px",fontWeight:"bold",fontFamily:"Montserrat"}} >Closing Note</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Led by the regional head or Arun. P</Typography>
                      </div>
                   </Grid>
                   <Grid item xs={12} md={3} style={{height:'100px',width:'200px',display:"flex",justifyContent:"flex-start",alignItems:'flex-start',paddingTop:"20px",paddingBottom:"20px"}} >
                       <div style={{display:'flex',alignItems:"flex-start",flexDirection:"column",justifyContent:'space-evenly',marginLeft:'10px'}}>
                         <Typography style={{color:"white",fontSize:"18px",fontWeight:"bold",fontFamily:"Montserrat"}} >Ralph Lifshitz</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Senior Managment Programe</Typography>
                         <Typography style={{color:"#A8A8A8",fontSize:"15px",fontWeight:"lighter",fontFamily:"Montserrat"}} >Management</Typography>
                      </div>
                   </Grid>
                   <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",width:"100%",height:"2px"}}>
                     <div className={classes.AgendaTopBorder}/>
                   </div>
               </Grid>
               <Grid item xs={12} style={{display:'flex',justifyContent:"center",alignItems:"center",marginBottom:"50px",marginTop:"20px"}}>
                 <img src={Meeting} style={{height:"100px",width:"80%"}} />
               </Grid>
               <Grid item xs={12} style={{display:'flex',justifyContent:"center",alignItems:"center",marginBottom:"100px"}}>
                 <div  style={{padding:'20px',height:"114px",width:"77%",backgroundColor:"#A3EBB1",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                       <div style={{textAlign:"left"}}>
                       <Typography style={{color:"white",fontWeight:"bold",fontSize:"20px",fontFamily:"Montserrat"}} >Always on Support & Demo Booths</Typography>
                       <Typography style={{color:"white",fontWeight:"lighter",fontSize:"15px",fontFamily:"Montserrat"}} >Booths for customer to reach out to freshworks for a quick demo or any form of support.</Typography>
                       </div>
                 </div>  
               </Grid>
               <img src={AgendaBlob2} style={{position:"absolute",zIndex:1,bottom:200,right:-100,transform:'rotate(90deg)'}} />
              
               <div style={{position:"absolute",zIndex:1,bottom:0,right:200,height:"450px",width:'850',overflow:"hidden"}}>
                   <img src={Union} style={{height:"500px",width:"700px"}} />
               </div>
        </div>
        <div id="FAQ" style={{height:'fit-content',width:"100%",backgroundColor:'#EBEBE8',position:"relative",zIndex:0,overflowX:"hidden"}}>
             <Box style={{height:"150px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:'column'}}>
                   <Typography style={{color:'#1D1111',fontWeight:'bold',fontSize:"35px",fontFamily:"Montserrat"}} >FAQ's</Typography>
                   <div style={{height:'10px',backgroundColor:'black',width:'40px'}} ></div>
             </Box>
             <Grid container style={{padding:"30px"}}>
                 <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px"}} >
                           <Typography   style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>
                 <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>


               <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>
                 <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>

                   <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>
                 <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>


                <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>
                 <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>


               <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC",borderBottom:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px",marginBottom:"25px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>
                 <Grid item xs={12} md={6} style={{height:"fit-content",padding:"20px",width:'100%',display:"flex",justifyContent:'center',alignItems:"center"}}>
                       <div style={{width:"80%",display:'flex',justifyContent:"center",alignItems:"center",flexDirection:'column',borderTop:"1px solid #00AFBC",borderBottom:"1px solid #00AFBC"}}>
                         <Box style={{display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:"15px",marginBottom:"25px"}} >
                           <Typography style={{fontFamily:"Montserrat"}}>Do I need to download or install any software to attend this event?</Typography>
                           <AddIcon style={{color:"#00AFBC"}} />
                         </Box>
                       </div>
                 </Grid>
             </Grid>
        </div>
        </>   
    )
}
