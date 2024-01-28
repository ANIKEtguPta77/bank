import React, { useState } from "react";
import axios from 'axios'


const OTPBox = ({verify,setverify,form}) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [invalid,setinvalid]=useState(false);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    
    const verifyotp=async(e)=>{
        
        

        const {phonenumber}=form;
        const Otp=otp.join("");
        const URL="http://localhost:500/api/user/signup/verify"
        const {data:{correct}} =await axios.post(`${URL}`,{
            "number":phonenumber,
            "otp":Otp
        });

      
        if(!correct){
            setinvalid(true);
        }
        else{
            setinvalid(false);
            setverify(true);
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
                                style={{width:'50px',height:'60px',marginLeft:'18px',textAlign:'center'}}
                            />
                        );
                    })}
                    {invalid&&<p style={{color:'red'}}>Invalid Otp</p>}
                    {!verify&&
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
                    }
                </div>
            </div>
        </>
    );
};

export default OTPBox;