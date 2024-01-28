import React from 'react'
import {Stack} from '@mui/material'
import {Top,SomeInfo,Products,Why} from './index'




const Feed = () => {
  return (
   
   <Stack direction='column' className='fed' alignItems='center' sx={{width:'100%'}}>
     <Top/> 
     <SomeInfo />
    <Products/>
    <Why/>
   </Stack>  
    
  )
}

export default Feed