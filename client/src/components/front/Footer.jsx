import React from 'react'
import {Stack,Box, Typography} from '@mui/material'
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <Stack direction='column' sx={{position:'relative',overflow:'hidden'}}>
    <Stack sx={{flexDirection:{sm:'column',md:'row'},height:{sm:'1500px',md:'600px'},backgroundColor:'#414242',fontFamily:"'Ubuntu', sans-serif"}}>
    <Box sx={{width:{sm:'90%',md:'25%'}}}>
        <Box sx={{padding:'30px',color:'white'}}>
            <Typography id='abc'>Contact Us</Typography>
            <Typography sx={{fontFamily:"'Play', sans-serif"}}>Call: 1800-419-5959<br/>
            SMS BAL to 56161600 or +918691000002<br/>
            to get your Account Balance
            </Typography>
        </Box>
        <Box sx={{padding:'30px',color:'white'}}>
            <Typography id='abc'>Address</Typography>
            <Typography sx={{fontFamily:"'Play', sans-serif"}}>IIITDM KANCEEPURAM,<br/>
            Melakottaiyur, Nellikuppam Rd, <br/>Near Kandigai, Off Vandalur-Kelambakkam Road<br/>, Chennai, Tamil Nadu 600127
            </Typography>
        </Box>
        <Box sx={{padding:'30px',color:'white'}}>
            <Typography id='abc'>Branches In</Typography>
            <Typography sx={{fontFamily:"'Play', sans-serif"}}>Chennai<br/>
            Noida<br/>
            Delhi
            </Typography>
        </Box>
    </Box>
    <Box sx={{width:{sm:'90%',md:'25%'}}}>
        <Box sx={{padding:'30px',color:'white'}}>
            <Typography id='abc'>Lobby-hours</Typography>
            <Typography sx={{fontFamily:"'Play', sans-serif"}}>M - F: 9 a.m. - 5 p.m.
            </Typography>
        </Box>
        <Box sx={{padding:'30px',color:'white'}}>
            <Typography id='abc'>Drive-Up-Hours</Typography>
            <Typography sx={{fontFamily:"'Play', sans-serif"}}>M - F: 8:00 a.m. - 5:30 p.m.<br/>
Saturday: 9 a.m. - 12 p.m.
            </Typography>
        </Box>
        
    </Box>
    <Box sx={{width:{sm:'90%',md:'25%'}}}>
        <Box sx={{padding:'30px',color:'white'}}>
            <Typography id='abc'>Other Links</Typography>
            <Typography sx={{fontFamily:"'Play', sans-serif"}}>Extract of Board Approved policy on Co-Lending Model<br/>
            Board Note & Guidelines - Resolution Framework 2.0<br/>
            Download Forms<br/>
            Download-Product Guide<br/>
            Download-E Brochures<br/>
            Fees and Charges<br/>
            Premise for Branch<br/>
            Do Not Call Registry<br/>
            Offers T&C<br/>
            Auction Notices<br/>
            IBC Disclosure<br/>
            Investment Knowledge Bank<br/>
            Positive Pay System<br/>
            
RBI Kehta Hai<br/>
RBI Sachet Portal<br/>
            </Typography>
        </Box>
        
    </Box>
    <Box sx={{width:{sm:'90%',md:'25%'}}}>
        <Box sx={{padding:'30px',color:'white'}}>
            <Typography sx={{color:'#eec913f8',fontSize:'24px',fontFamily:"'Ubuntu', sans-serif"}}>PNO|Nodal Desk</Typography>
            <Typography sx={{fontFamily:"'Play', sans-serif"}}>Level 1 – Queries, Request or Complaint Redressal<br/>
            Level 2 – Write to Nodal Officer<br/>
            Level 3 – Write to Principal Nodal<br/>
            Officer<br/>
            (Email ID-PNO@iiitdm.ac.in)<br/>
            <Button variant="contained" sx={{backgroundColor:'#eec913f8',height:'50px',width:'200px',color:'black'}}>Report a Fraud</Button>
            </Typography>
        </Box>
        
    </Box>
    
    

    </Stack>
    <div style={{position:"absolute",height:'1px',backgroundColor:'white',width:'93%',top:'600px',marginLeft:'30px'}}></div>
    <Stack  direction="column" sx={{height:'400px',backgroundColor:'#414242'}}>
        <Stack direction="row" sx={{width:"100%",marginTop:'20px',marginLeft:'30px'}}>
            <Box width="15%" id='abc'>OUR OFFERING</Box>
            <Box width="70%" sx={{fontFamily:"'Play', sans-serif",color:'white'}}>Digital FD,Personal Loan, Car Loan,Home Loan, Savings Account,24x7 Loans, Credit Card, FD, 
            FD Interest Rates, Education Loan, Current Account, Fastag, Trade & Forex, CMS, TATA AIG General Insurance, ICICI Lombard General Insurance, Axis Pay,
            Axis Mobile, Internet Banking, PPF Account, 24x7 Loan Against SecuritiesNew, Mutual Fund Management, Digital Gold, Axis Family Book of Records</Box>
        </Stack>
        <Stack direction="row" sx={{width:"100%",marginTop:'20px',marginLeft:'30px'}}>
            <Box width="15%" id='abc'>CALCULATORS</Box>
            <Box width="70%" sx={{fontFamily:"'Play', sans-serif",color:'white'}}>Personal Loan EMI Calculator,Car Loan EMI Calculator, Home Loan EMI Calculator,FD Calculator, RD Calculator, Education Loan EMI Calculator, Life Insurance Calculator, SIP Calculator,EMI Calculator, 
            Personal Loan Eligibility Calculator, Credit Card EMI Calculator, Annual Percentage Rate Calculator, Emergency Savings Planner, 
            PPF Calculator, Two Wheeler EMI Calculator</Box>
        </Stack>
        <Stack direction="row" sx={{width:"100%",marginTop:'20px',marginLeft:'30px'}}>
            <Box width="15%" id='abc'>CONNECT WITH US ON</Box>
            <Box width="70%" sx={{fontFamily:"'Play', sans-serif",color:'white'}}>
                <FacebookIcon id ="face"sx={{height:'40px',width:'40px',margin:'10px'}}/>
                <LinkedInIcon id ='lin' sx={{height:'40px',width:'40px',margin:'10px'}}/>
                <TwitterIcon  id="twi" sx={{height:'40px',width:'40px',margin:'10px'}}/>
                <YouTubeIcon id ="you" sx={{height:'40px',width:'40px',margin:'10px'}}/>
                <InstagramIcon  id ="insta" sx={{height:'40px',width:'40px',margin:'10px'}}/>
            </Box>
        </Stack>
        <Box width='100%' sx={{backgroundColor:'black',color:'white',height:'30px',marginTop:'95px',paddingLeft:'40%'}}>Copyright ©  2023  IIITDM Bank</Box>
    </Stack>

    </Stack>
  )
}

export default Footer