import React from 'react'
import { Typography,Box,useTheme } from '@mui/material';
import { tokens } from '../theme';
import './header.css'


const Header = ({title, subtitle})=>{
const  theme = useTheme() 
const colors = tokens(theme.palette.mode)
return(
  <Box mb="30px">
    <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx= {{mb:"5px"}}>
      {title}
    </Typography>
     <Typography variant='h4' color={colors.greenAccent[400]} fontWeight="bold">{subtitle}</Typography>
  </Box>
)
}


export default Header;