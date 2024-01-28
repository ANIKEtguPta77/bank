import React from 'react'
import { logo } from '../utils/photos'
import { Typography,Button,Stack,Box } from '@mui/material'
import img1 from '../assets/img1.jpg'

const Why = () => {
  return (
    <Stack direction="column" sx={{height:'1500px',width:'100%',backgroundColor:'white',overflow:'hidden'}}>
        <Box sx={{display:'block',height:'1500px',width:'100%',position:'relative'}}>
        <img className="img2" src={logo} alt="logo" height='100%' width='100%'/>
        <Stack direction="row" sx={{height:'500px',width:"100%",position:'absolute',top:'0'}}>
            <Box sx={{width:{sm:"100%",md:"50%"},height:'100%',paddingLeft:'120px',paddingTop:'10px'}}>
                 <Typography sx={{fontFamily:"'Play', sans-serif",fontSize:'1.8rem'}}>Online Banking at IIITDM Bank</Typography>
                 <Typography sx={{fontFamily:"'Ubuntu', sans-serif",fontSize:'1.2rem',paddingBottom:'30px'}}>WE HAVE A VARIETY OF PRODUCTS THAT GIVE YOU CONTROL OF YOUR FINANCES.</Typography>
                 <div style={{height:'8px',width:"100px",backgroundColor:'#eec913f8'}}></div>
                 <Typography sx={{fontFamily:"'Play', sans-serif",fontSize:'1.2rem',paddingTop:'30px',color:'#4e4f50'}}>We value face-to-face relationships with our customers. But we also recognize the importance of accessing your
                  financial information, managing payments, transferring and 
                 depositing funds away from the physical bank. Take a look at the products we’ve cultivated to give you control.</Typography>
                 <Button variant="contained" sx={{backgroundColor:"#236095",height:'50px',marginTop:'20px'}}>Start Now</Button>
            </Box>
            <Box sx={{width:{sm:"0%",md:"50%"},display:{sm:'none',md:'block'},paddingLeft:'100px'}}>
                 <img src={img1} alt="photo" style={{height:'400px'}}/>
            </Box>
        </Stack>
        <Stack direction="row" sx={{height:'500px',width:"100%",position:'absolute',top:'500px'}}>
        <Box sx={{width:{sm:"0%",md:"50%"},display:{sm:'none',md:'block'},paddingLeft:'100px'}}>
                 <img src={img1} alt="photo" style={{height:'400px'}}/>
            </Box>
            <Box sx={{width:{sm:"100%",md:"50%"},height:'100%',paddingLeft:'120px',paddingTop:'10px'}}>
                 <Typography sx={{fontFamily:"'Ubuntu', sans-serif",fontSize:'1.6rem',paddingBottom:'30px'}}>YOUR FLEXIBLE BUSINESS PARTNER</Typography>
                 <div style={{height:'8px',width:"100px",backgroundColor:'#eec913f8'}}></div>
                 <Typography sx={{fontFamily:"'Play', sans-serif",fontSize:'1.2rem',paddingTop:'30px',color:'#4e4f50'}}>We hear time and again from our business customers that they were lost in the crowd at their previous banks. 
                 At IIITDM Bank we serve  Madison and Verona, Wisconsin with a small team of passionate professionals that know our customers by name.</Typography>
                 <Button variant="contained" sx={{backgroundColor:"#236095",height:'50px',marginTop:'20px'}}>Services</Button>
            </Box>
            
        </Stack>
        <Stack direction="row" sx={{height:'500px',width:"100%",position:'absolute',top:'1000px'}}>
       
            <Box sx={{width:{sm:"100%",md:"50%"},height:'100%',paddingLeft:'120px',paddingTop:'10px'}}>
                
                 <Typography sx={{fontFamily:"'Play', sans-serif",fontSize:'2rem',color:'#4e4f50',paddingTop:'100px'}}>“Quality in a product or service is not what you put into it. It’s what the customer gets out of it. I strive for simplicity and flexibility in serving our customers.”</Typography>
                 <Button variant="contained" sx={{backgroundColor:"#236095",height:'50px',marginTop:'20px'}}>Meet Our Team</Button>
            </Box>
            <Box sx={{width:{sm:"0%",md:"50%"},display:{sm:'none',md:'block'},paddingLeft:'100px'}}>
                 <img src={img1} alt="photo" style={{height:'400px'}}/>
            </Box>
            
        </Stack>
        </Box>
    </Stack>
  )
}

export default Why