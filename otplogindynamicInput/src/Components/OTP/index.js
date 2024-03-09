import React, { useEffect, useRef, useState } from "react";
import "./index.css";
function OTPLogin({ otpinputfeilds }) {
  const [otpArray, setOtpArray] = useState(
    otpinputfeilds ? new Array(otpinputfeilds).fill("") : []
  );
 
  const ref=useRef([]);
  useEffect(()=>{
    if(ref && ref.current && ref.current[0]){
      ref.current[0].focus()
    }
   },[])
   const keyChangeHandler =(e,index)=>{
    if(e?.code==='Backspace'&& index>0 ){
      ref.current[index-1].focus()
    }
   }
  const otpChangeHandler=(e,index)=>{
   let inputValue=e.target.value;

   if(isNaN(inputValue)){
    return;
   }

   let newOtpArray=[...otpArray]
   newOtpArray[index]=inputValue.substring(inputValue.length-1);
   
   
   if(index<otpArray.length-1 && inputValue){
    ref.current[index+1].focus()
   }
   setOtpArray(newOtpArray);

  }
  return (
    <>
      <div className="otpContainer">
        {otpArray.map((ele,index) => (
          <input type="text"
          name={index}
          key={index}
          value={ele}
          ref={(e)=>ref.current[index]=e}
          onChange={(e)=>otpChangeHandler(e,index)}
          onKeyUp={(e)=>keyChangeHandler(e,index)}
          ></input>
        ))}
      </div>
    </>
  );
}

export default OTPLogin;
