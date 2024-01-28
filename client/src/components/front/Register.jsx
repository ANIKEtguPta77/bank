import * as React from 'react';
import {Box} from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Rpage from './Rpage';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios'
import { useSpeechSynthesis } from 'react-speech-kit'

const IntialState = {
  firstname: '',
  lastname: '',
  phonenumber: '',
  password: '',
  email:''

}

const steps = ['Enter PhoneNumber', 'Enter Details', 'Authentication','Set Password'];

const Register=()=> {
  const [activeStep, setActiveStep] = React.useState(0);
  const [form, setform] = React.useState(IntialState);
  const { speak } = useSpeechSynthesis();
   const [i,seti]=React.useState(1);

  const handleOtp=async(e)=>{
    
    
    const {phonenumber}=form;
       
        const URL="http://localhost:500/api/user/signup"
        const {data:{message}} =await axios.post(`${URL}`,{
            "number":phonenumber,
            "payment":false
        });
        speak({text:"Otp sent"})


  }

  const handledataentry=async(e)=>{
    
    
    const {phonenumber,firstname,lastname,password,email}=form;
       
        const URL="http://localhost:500/api/user/rsignup"
        const {data:{message}} =await axios.post(`${URL}`,{
            "phonenumber":phonenumber,
            "firstname":firstname,
            "lastname":lastname,
            "password":password,
            "email":email
        });
       

  }


  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    speak({text:"Next"})
    if(activeStep===0){
      
      handleOtp()
      }

    if(activeStep===3){
      handledataentry()
    }  

    };

  

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    speak({text:"Back"})

  };

  const handeeChange = (e) => {
    setform({
        ...form,
        [e.target.name]: e.target.value
    });
    // speak({text:[e.target.name],rate:3})
    // speak({text:[e.target.value]})
    
    
}


  return (
  <Box sx={{height:'800px',width:'100%',backgroundColor:'#e1e2e3',paddingBottom:'100px'}}>
    <Box >
      <Stepper activeStep={activeStep} sx={{paddingLeft:'340px',paddingTop:'50px',width:'80%'}} alternativeLabel>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel sx={{height:'100px',fontSize:'240px'}}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{fontSize:'50px',fontFamily:"'Ubuntu', sans-serif",color:'#236095'}}>
            Congratulations All steps completed - you&apos;re finished<br/>
            <DoneIcon sx={{height:'200px',width:'300px'}}/>
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Link to='/login' id='link'>
            <Button id='btn1'>Login</Button>
            </Link>
          </Box>
          
        </React.Fragment>
      ) : (
        <Rpage step={activeStep+1} handleBack={handleBack} handleNext={handleNext} handeeChange={handeeChange} form={form}/>
        
      )}
    </Box>
    </Box>
  
  );
      }


export default Register