import React from 'react'
import {Stack,Box,Paper, Typography} from '@mui/material'
import SavingsIcon from '@mui/icons-material/Savings';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceSharpIcon from '@mui/icons-material/AccountBalanceSharp';
import RequestQuoteSharpIcon from '@mui/icons-material/RequestQuoteSharp';

const Products = () => {
  return (
    <>
    <Typography sx={{marginTop:'10px',fontSize:'35px',fontFamily:"'Play', sans-serif",}}> <span style={{fontWeight:'800',fontFamily:"'Ubuntu', sans-serif",color:'#236095',fontSize:'50px',margin:'0',padding:'0'}}>Products</span> to meet your life goals </Typography>
    <Stack alignItems="center" sx={{flexDirection:{sm:'column',md:'row'},width:'100%',height:'400px'}}>
        <Stack direction="row" alignItems="center" sx={{backgroundColor:'white',height:'400px',width:{sm:'100%',md:'50%'}}}>
        <Paper elevation={24} sx={{height:'240px',width:{sm:'50%',md:'40%'},margin:'10px',position:'relative'}}>
            <CurrencyRupeeIcon sx={{height:'30px',width:'30px',marginLeft:'100px',marginTop:'50px',color:'#236095',position:'absolute'}}/>
            <SavingsIcon sx={{height:'80px',width:'60px',color:'#236095',marginLeft:'85px',marginTop:'50px'}}/>
            <p className="hi">Digital Saving Account</p>
        </Paper>
        <Paper elevation={24} sx={{height:'240px',width:{sm:'50%',md:'40%'},margin:'10px',marginLeft:'60px'}}>
            <CreditCardIcon sx={{height:'80px',width:'80px',color:'#236095',marginLeft:'85px',marginTop:'60px'}}/>
            <p className='hi' style={{paddingLeft:'69px'}}>Credit Cards</p>
        </Paper>
        </Stack>
        <Stack direction="row" alignItems="center" sx={{backgroundColor:'white',height:'400px',width:{sm:'100%',md:'50%'}}}>
        <Paper elevation={24} sx={{height:'240px',width:{sm:'50%',md:'40%'},margin:'10px'}}>
        <AccountBalanceSharpIcon sx={{height:'80px',width:'80px',color:'#236095',marginLeft:'84px',marginTop:'60px'}}/>
        <p className='hi'  style={{paddingLeft:'60px'}}>Personal Loan</p>
        </Paper>
        <Paper elevation={24} sx={{height:'240px',width:{sm:'50%',md:'40%'},margin:'10px',marginLeft:'60px'}}>
            <RequestQuoteSharpIcon sx={{height:'80px',width:'80px',color:'#236095',marginLeft:'80px',marginTop:'60px'}}/>
            <p className='hi'  style={{paddingLeft:'70px'}}>Express FD</p>
        </Paper>
        </Stack>
    </Stack>
    </>
  )
}

export default Products