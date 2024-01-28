import React from 'react'
import { Stack,Box } from '@mui/system';
import img1 from '../assets/img1.jpg'
import {Typography } from '@mui/material';

const Common = ({name,left,i}) => {
  return (
      
    <Stack sx={{flexDirection:{sx:"column",md:"row"},height:'625px',width:'100%',backgroundColor:'#236095',position:'relative'}}>
    <Box sx={{display:'block',height:'625px',width:'100%'}}>
        <img className="img1" src={i} alt="image" height='100%' width='100%'/>
        <Typography sx={{position:'absolute',
        color:'#eec913f8',
        zIndex:2,
        fontSize:{xs:'2rem',sm:'2rem',md:'3rem',lg:'5rem'}
        ,top:{xs:'10rem',md:'15rem'},
        left:{xs:'4rem',sm:'7.8rem',md:'15rem',lg:`${left}`},
        fontFamily:"'Ubuntu', sans-serif"}}>
            {name}
        </Typography>
        </Box>

    </Stack>

  )
}

export default Common