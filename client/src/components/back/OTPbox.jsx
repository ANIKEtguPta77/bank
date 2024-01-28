import React, { useState } from "react";
import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies=new Cookies();

const OTPbox = ({form1}) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [invalid,setinvalid]=useState(false);
    const [user,setuser]=useState(false);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    
    const verifyotp=async(e)=>{
        e.preventDefault();
        const phonenumber=cookies.get('phonenumber');
       
        const Otp=otp.join("");

        var params={
            "number":phonenumber,
            "otp":Otp
        }
        
        
        const URL="http://localhost:500/api/user/signup/verify"
        const {data:{correct}} =await axios.post(`${URL}`,params);

        
        if(!correct){
            setinvalid(true);
           
        }
        else{
            
            var {phone,amount}=form1;
            amount=Number(amount)
            
            params={
                "fromphonenumber":phonenumber,
                "amount":amount,
                "tophonenumber":phone
            };
            
            setinvalid(false);
            const URL1="http://localhost:500/api/user/transactions"
            const {data:{correct1,balance,transactions,sent,linedata}} =await axios.post(`${URL1}`,params);
            
            if(!correct1){
                setuser(true);
            }
            else{
                setuser(false);
                cookies.set('balance',balance);
                cookies.set('transactions',transactions);
                cookies.set('sent',sent);
                cookies.set('linedata',linedata)
            }
           
        }
        
    }
    return (
        <>
            

            

            <div className="row">
                <div className="col text-center">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                                style={{width:'40px',height:'50px',marginLeft:'18px',textAlign:'center'}}
                            />
                        );
                    })}
                    {invalid&&<p style={{color:'red'}}>Invalid Otp</p>}
                    {user&&<p style={{color:'red'}}>User Doesn't Exist</p>}
                    <p style={{margin:'30px'}}>
                        <button
                            className="btn btn-secondary mr-2"
                            onClick={e => setOtp([...otp.map(v => "")])}
                            style={{margin:'30px',height:'60px',width:'120px'}}
                        >
                            Clear
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={verifyotp}
                            style={{margin:'30px',height:'60px',width:'120px'}}
                        >
                            Verify OTP
                        </button>
                    </p>
                    
                </div>
            </div>
        </>
    );
};

export default OTPbox;