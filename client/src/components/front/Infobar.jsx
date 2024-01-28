import React from 'react'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { Link } from 'react-router-dom';
import { useSpeechSynthesis } from 'react-speech-kit'

const Infobar = () => {

  const { speak } = useSpeechSynthesis();

  const handleov=()=>{
    
    speak({text:"Location"})
  }
  const handleov2=()=>{
    
    speak({text:"Phonenumber:91232342323"})
  }
  const handleov3=()=>{
    
    speak({text:"Share Rate"})
  }
  const handleov4=()=>{
    
    speak({text:"Log IN employess"})
  }

  
  return (
    <Stack direction='row' alignItems="center" sx={{backgroundColor:'#236095',height:'25px',display:{xs:'none',md:'block',lg:'block'},color:'white',position:'relative'}}>
    <Link to="https://goo.gl/maps/GqujmSgkRPtEJr3p7" className='links' onMouseOver={handleov} >
        <MyLocationIcon sx={{position:'absolute' ,right:'710px',paddingTop:'6px'}}
        />
       <Typography  sx={{position:'absolute' ,right:'640px',paddingTop:'1px',fontFamily:"'Ubuntu', sans-serif"}}  >Location</Typography>
       </Link>
       <Link className='links' onMouseOver={handleov2} >
       <PhoneForwardedIcon sx={{position:'absolute' ,right:'530px',paddingTop:'6px'}}/>
       <Typography  sx={{position:'absolute' ,right:'400px',paddingTop:'1px',fontFamily:"'Ubuntu', sans-serif"}}>+91 23234-2323</Typography>
       </Link>
       <Link to="https://www.moneycontrol.com/india/stockpricequote/banks-private-sector/axisbank/AB16" className='links' onMouseOver={handleov3} >
            <Typography  sx={{position:'absolute' ,right:'250px',paddingTop:'1px',fontFamily:"'Ubuntu', sans-serif"}}>Share Rate</Typography>

       </Link>
       <Link to="https://www.moneycontrol.com/india/stockpricequote/banks-private-sector/axisbank/AB16" className='links' onMouseOver={handleov4} >
            <Typography sx={{position:'absolute' ,right:'30px',paddingTop:'1px',fontFamily:"'Ubuntu', sans-serif"}}>Log in(Employess)</Typography>

       </Link>
      
    </Stack>
  )
}

export default Infobar