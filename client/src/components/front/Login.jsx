import React, { useState } from 'react'
import { Box, Paper, Stack, Typography, Alert, AlertTitle, Link} from '@mui/material'
import InfoIcon from '@mui/icons-material/Info';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Cookies from 'universal-cookie'
import axios from 'axios'

const cookies=new Cookies();
const IntialState={
  phonenumber:'',
  password:''
}


const Login = ({auth,setauth}) => {

  const [vis, setvis] = useState(true);
  const [alert, setalert] = useState(true);
  const [form,setform]=useState(IntialState);
  const [wrongpas,setwrongpas]=useState(false);
  const [wrongcre,setwrongcre]=useState(false);

  const handelChange = (e) => {
    setform({...form,
        [e.target.name]:e.target.value})
 }

  const changevis1 = () => {
    setvis(!vis);
  }

  const handlealert = () => {
    setalert(!alert);
  }


  const handleSubmit=async(e)=>{
    e.preventDefault();

    const {phonenumber,password}=form;
    console.log(form)
    
    const URL="http://localhost:500/api/user/login"
    const {data:{message,phonenumber1,firstname,lastname,balance,transactions,sent,received,allcontacts,linedata}} =await axios.post(`${URL}`,{
        "phonenumber":phonenumber,
        "password":password
    });
  
    if(message===true){
      setauth(!auth);

      cookies.set('phonenumber',phonenumber1);
      cookies.set('firstname',firstname);
      cookies.set('lastname',lastname);
      cookies.set('balance',balance);
      cookies.set('transactions',transactions);
      cookies.set('sent',sent);
      cookies.set('received',received);
      cookies.set('all',allcontacts);
      cookies.set('linedata',linedata);
     
      
    } 
    else if(message===false){
        setwrongcre(!wrongcre)
    }
    else{
      setwrongpas(!wrongpas)
    }
    
  }



  return (



    <Stack direction='row'>

      <Box sx={{ display: 'block', height: '700px', width: '50%', margin: 'auto' }}>
        <Typography sx={{
          fontFamily: "'Ubuntu', sans-serif",
          fontSize: '30px', color: "white",
          marginLeft: '130px', marginBottom: '-20px',
          backgroundColor: '#eec913f8', borderRadius: '30px'
          , width: '70%', padding: '15px'
        }}>   Login To Internet Banking</Typography>
        <Paper elevation={24} sx={{ height: '500px', width: '90%', marginLeft: '50px', position: 'relative' }}>
          <form onSubmit={handleSubmit}>
            <div className='form' style={{ marginLeft: '100px', marginTop: '80px', position: 'absolute' }}>
              <input type='text' placeholder=" " className='textbox' name='phonenumber' onChange={handelChange} required />
              <label className='form-label'>Registerd Number</label>

              <InfoIcon sx={{ color: 'rgb(142, 141, 141)' }} onClick={handlealert} />
            </div>
            <div className='form' style={{ marginLeft: '100px', marginTop: '190px', position: 'absolute' }}>
              <input type={vis ? 'password' : 'text'} placeholder=" " className='textbox' name='password' onChange={handelChange} required />
              <label className='form-label'>Password</label>
              <VisibilityIcon sx={{ color: 'rgb(142, 141, 141)' }} onClick={changevis1} />
            </div>
            {!alert && <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              This is the to inform yout that you have to enter the — <strong>Registerd Mobile Number</strong>
            </Alert>}
            <div style={{position:'absolute',top:'300px',left:'50px'}}>
            <p>Forgot Password  ?<Link to='/forgot' id='link' style={{color:'rgb(142, 141, 141)'}}>Reset Here</Link></p>
            
            </div>
            <div style={{position:'absolute',top:'300px',left:'300px'}}>
            <p>Don't have a Account  ?<Link to='/forgot' id='link' style={{color:'rgb(142, 141, 141)'}}>Open Here</Link></p>
            
            </div>
            {wrongpas&&<p style={{position:'absolute',top:'340px',left:'290px',color:'red'}}>Wrong Password</p>}
            {wrongcre&&<p style={{position:'absolute',top:'340px',left:'290px',color:'red'}}>User doesn't exist </p>}
            <div style={{position:'absolute',top:'360px',left:'70px',height:'1px',width:'80%',backgroundColor:'rgb(142, 141, 141)'}}>
            </div>
            <button id='btn1'style={{position:'absolute',top:'360px',left:'40px',width:'80%'}}>Login</button>
          </form>
        </Paper>
      </Box>
      <Box sx={{ display: 'block', height: '625px', width: '50%', margin: 'auto' }}>

      </Box>
    </Stack>


  )
}

export default Login