import React from 'react'
import { Stack,Box } from '@mui/system'
import { Typography,Card,CardContent,CardActions,CardMedia,Button } from '@mui/material'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/bank1.jpg'
import img3 from '../assets/bank2.jpg'
import img4 from '../assets/bank3.jpg'




const SomeInfo = () => {

   
  return (
    <Stack sx={{flexDirection:{sm:"column",md:"row"},width:'100%',backgroundColor:'white'}}>
    <Box sx={{height:'410px',width:{sm:"100%",md:"60%"},alignItems:'center',overflowY:"hidden"}}>
    <Box sx={{margin:'60px',padding:'0px'}}>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner"  style={{height:'400px'}}>
    <div className="carousel-item active" style={{height:'400px'}}>
      <img src={img2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:'black'}}>LOAN RATE</h5>
      
      </div>
    </div>
    <div className="carousel-item"  style={{height:'400px'}}>
      <img src={img3} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:'black'}}>START INVESTING NOW</h5>
      
      </div>
    </div>
    <div className="carousel-item"  style={{height:'400px'}}>
      <img src={img4} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:'black'}}>APPLY NOW</h5>
      
      </div>
    </div>
  </div>
</div>
</Box>

        
    </Box>
    <Box sx={{height:'450px',width:{sm:"100%",md:"40%"},alignItems:'center',marginLeft:{md:'50px'}}}>
        <Typography sx={{marginTop:'50px',fontSize:'35px',marginLeft:'10px',fontFamily:"'Play', sans-serif"}}>
          <span style={{fontWeight:'500',fontFamily:"'Ubuntu', sans-serif",color:'#236095'}}>Key</span> Updates
        </Typography>
        <Card sx={{ width:'545px' }}>
      <CardMedia
        sx={{ height: 320 }}
        image={img1}
        title="green iguana"
      />
    
      <CardActions sx={{padding:0,alignItems:'center',justifyContent:'center'}}>
        <Button size="medium">Apply Now</Button>
      </CardActions>
    </Card>
        
    </Box>

    </Stack>
  )
}

export default SomeInfo