import React from 'react';
import { Stack,Box } from '@mui/system';
import img1 from '../assets/img1.jpg'
import { Hidden, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Top = () => {
  return (
    
    <Stack sx={{flexDirection:{sx:"column",md:"row"},height:'605px',width:'100%',backgroundColor:'#236095',position:'relative'}}>
    <Box sx={{display:'block',height:'625px',width:'100%'}}>
        <img className="img1" src={img1} alt="image" height='100%' width='100%'/>
        <Typography sx={{position:'absolute',color:'#eec913f8',zIndex:2,fontSize:{xs:'2rem',sm:'2rem',md:'2.5rem'},top:{xs:'10rem',md:'8rem'},left:{xs:'4rem',sm:'7.8rem',md:'17rem',},fontFamily:"'Ubuntu', sans-serif"}}>
            YOUR LOCAL BANK YOU CAN TRUST
        </Typography>
        <Typography sx={{position:'absolute',color:'#fff',zIndex:2,fontSize:{xs:'1.5rem',sm:'1.5rem',md:'2.0rem',},top:{xs:'15rem',md:'15rem'},left:{xs:'4rem',sm:'13rem',md:'20rem',},fontFamily:"'Ubuntu', sans-serif"}}>
            5 * STAR RATING -SUPERIOR BY RBI

        </Typography>
        <Typography sx={{position:'absolute',color:'#fff',zIndex:2,fontSize:{xs:'1.5rem',sm:'1.5rem',md:'2.0rem',},top:{xs:'18rem',md:'18rem'},left:{xs:'4rem',sm:'8rem',md:'16rem'},fontFamily:"'Ubuntu', sans-serif"}}>
            A TOP 200 HEALIEST BANK IN INDIA BY INDIA.COM

        </Typography>
        <Typography sx={{position:'absolute',color:'#fff',zIndex:2,fontWeight:100,fontSize:{xs:'1.5rem',sm:'1.5rem',md:'2.0rem',},top:{xs:'24rem',md:'25rem'},left:{xs:'4rem',sm:'8rem',md:'15rem'},fontFamily:"'Play', sans-serif"}}>
            Click here to know more about IIItdm Bank Today!!!

        </Typography>
        <Button variant="contained" sx={{background:"#eec913f8",color:'black',position:'absolute',height:'60px',width:'150px',top:{xs:'30rem',md:'30rem'},left:{xs:'4rem',sm:'20rem',md:'34rem',},fontFamily:"'Ubuntu', sans-serif",fontSize:'1.3rem'}}>
        CLICK HERE
      </Button>
        </Box>

    </Stack>


  );
}

export default Top