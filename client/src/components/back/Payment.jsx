import "./header.css" 
import React,{useState} from 'react';
import {Paper, Typography} from '@mui/material';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import {OTPbox} from './index'
import Cookies from 'universal-cookie'
import axios from 'axios'
const cookies=new Cookies();

const IntialState1={
  phone:'',
  amount:0
}

const Payments = () => {
  const [form1,setform1]=useState(IntialState1);
  const [modal,setmodal]=useState(false)

  const handelChange=(e)=>{
    setform1({...form1,
      [e.target.name]:e.target.value});
     
  }



  const handelsubmit=async(e)=>{
    e.preventDefault();
    
    const phonenumber=cookies.get('phonenumber');
    const URL="http://localhost:500/api/user/signup"
    const {data:{message}} =await axios.post(`${URL}`,{
        "number":phonenumber,
        "payment":true
    });
    setmodal(!modal)

  }


    return  (
      <>

        <Modal size="lg" isOpen={modal} toggle={()=>setmodal(!modal)}>
        <ModalHeader toggle={()=>setmodal(!modal)}>Verify Otp For Payment</ModalHeader>
        <ModalBody>
          <OTPbox form1={form1}/>
        </ModalBody>

        </Modal>

    <Paper elevation={24} sx={{width:'55%',margin:'auto',height:'430px'}}>
    <Typography sx={{color:'#eec913f8',
    fontSize:{xs:'2rem',sm:'2rem',md:'2.5em'},marginLeft:'132px',
    fontFamily:"'Ubuntu', sans-serif"}}>Payment Gateway</Typography>
    <form onSubmit={handelsubmit}>
    <Paper elevation={22} sx={{width:'30%',margin:'60px',marginLeft:'120px'}}>
    <div className='form' >
              <input type='number' placeholder=" " className='textbox' name='amount' onChange={handelChange} required />
              <label className='form-label'>$Amount</label>
              </div>
             
    </Paper>
    <Paper elevation={22} sx={{width:'30%',margin:'60px',marginLeft:'120px'}}>
    <div className='form' >
              <input type='text' placeholder=" " className='textbox' name='phone' onChange={handelChange} required />
              <label className='form-label'>Send To</label>
              </div>
             
    </Paper>
    <button id='btn1'style={{width:'40%',marginLeft:'160px'}}>Confirm Payement</button>
    </form>
    </Paper>
      </>

  
    );
}

export default Payments
