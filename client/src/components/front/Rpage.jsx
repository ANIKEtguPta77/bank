import { React, useState, useEffect } from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import { OTPBox } from './index';


const Rpage = ({ step, handleNext, handleBack,handeeChange,form }) => {

    const [verify, setverify] = useState(true);
   
    const [Type,setType]=useState(true);

   


    useEffect(() => {
        if (step === 3) {
            setverify(false);
        }
    }, [step])

    
   

  

    const changevis=()=>{
        setType(!Type);
    }




    return (
        <Box sx={{ height: "100%", width: '100%' }}>
            <Paper elevation={24} sx={{ height: '600px', width: '70%', margin: 'auto' }}>
                <Stack direction='row'>
                    <Box width='60%' sx={{ height: '600px' }}>
                   
                        {
                            step === 1 && <>
                                <Typography sx={{ fontSize: '30px', margin: '50px', fontFamily: "'Ubuntu', sans-serif", color: 'rgb(142, 141, 141)' }}>First Time User Registration</Typography>
                                <div className='form' style={{ marginTop: '100px', marginLeft: '40px' }}>
                                    <input type='text' placeholder=" " className='textbox' name='phonenumber' onChange={handeeChange} required />
                                    <label className='form-label'>Phone Number</label>

                                </div>

                            </>}





                        {
                            step === 2 && <>

                                <Typography sx={{ fontSize: '35px', margin: '50px', fontFamily: "'Ubuntu', sans-serif", color: 'rgb(142, 141, 141)' }}>Enter Details</Typography>
                                <div className='form' style={{ marginTop: '80px', marginLeft: '40px' }}>
                                    <input type='text' placeholder=" " className='textbox' name='firstname' onChange={handeeChange} required />
                                    <label className='form-label'>First Name</label>

                                </div>
                                <div className='form' style={{ marginTop: '40px', marginLeft: '40px' }}>
                                    <input type='text' placeholder=" " className='textbox' name='lastname' onChange={handeeChange} required />
                                    <label className='form-label'>Last Name</label>

                                </div>
                                <div className='form' style={{ marginTop: '40px', marginLeft: '40px' }}>
                                    <input type='text' placeholder=" " className='textbox' name='email' onChange={handeeChange} required />
                                    <label className='form-label'>Email</label>

                                </div>
                            </>}



                        {step === 3 && <>
                            <Typography sx={{ fontSize: '25px', margin: '50px', fontFamily: "'Ubuntu', sans-serif", color: 'rgb(142, 141, 141)' }}>Enter 6-Digit Otp</Typography>
                            <OTPBox verify={verify} setverify={setverify} form={form}/>
                        </>}


                        {step === 4 && <> 
                            <Typography sx={{ fontSize: '30px', margin: '50px', fontFamily: "'Ubuntu', sans-serif", color: 'rgb(142, 141, 141)' }}>Set Password</Typography>
                            <div className='form' style={{ marginTop: '80px', marginLeft: '40px' }}>
                                <input type={Type ? 'text' : 'password'} placeholder=" " className='textbox' name='password' onChange={handeeChange} required />
                                <label className='form-label'>Set Password</label>
                                <VisibilityIcon className='icon' onClick={changevis}/>
                            </div>
                            <div className='form' style={{ marginTop: '80px', marginLeft: '40px' }}>
                                <input type={Type ? 'text' : 'password'} placeholder=" " className='textbox' name='confirm password' required />
                                <label className='form-label'>Confirm Password</label>
                                <VisibilityIcon className='icon' onClick={changevis}/>
                            </div>
                        </>}

                     
                        {verify && <>
                            <Button variant='contained'
                                id='btn1'
                                onClick={handleNext}
                            >
                                {step === 4 ? 'Finish' : 'Proceed'}
                            </Button>
                            
                            <Button variant='outlined'
                                id='btn2'
                                disabled={step === 1}
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            </>
                            }
                        
                    </Box>
                    <Box width='40%' sx={{ height: { sm: '0px', md: '600px' } }}>
                        <Paper variant='outlined' eleavation={24} sx={{ backgroundColor: '#e1e2e3', margin: '30px', padding: '20px', height: { sm: '0px', md: '530px' } }}>
                            <p style={{ fontFamily: "Ubuntu', sans-serif", fontSize: "1.3rem" }}>Please Note</p>
                            <ul>
                                <li>Please enter the mobile Number with atmost care</li>
                                <li>Enter the Details with atmost care .Once entered after finishing the porcess it takes nominal fees to change it</li>
                                <li>Don't share the otp with anyone.Either it is a bank employee itself </li>
                                <li>Keep the password as strong and normal to remember as possible such that nobody except you can login</li>
                                <li>Kindly remember and read all documnets carefully.</li>
                            </ul>
                        </Paper>
                    </Box>

                </Stack>
            </Paper>
        </Box>
    )
}

export default Rpage