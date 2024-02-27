import React, { useEffect, useRef, useState } from "react";
import "./index.css";
function OTPLogin(props) {
  const [otpArray, setOtpArray] = useState(
    props?.inputOtpFeilds ? Array(props?.inputOtpFeilds).fill("") : []
  );

  useEffect(() => {
    inputRefs?.current[0]?.focus();
  }, []);
  const inputRefs = useRef([]);

  const otpValueHandler = (e, index) => {
    let value=e.target.value;
    if(isNaN(value)){
        return ;
    }
    let newArr = [...otpArray];
    newArr[index] = value.substring(value.length-1);
    setOtpArray(newArr);

    if (value && index < otpArray.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const keyDownHandler = (e,index) => {
        if(e.key=='Backspace' && index>0 &&inputRefs.current[index - 1]){
            inputRefs.current[index - 1].focus();
        }
    
  };
  return (
    <>
      
        <div className="otpContainer">
          {otpArray.map((ele, index) => {
            return (
              <input
                type="text"
                key={index}
                name={index}
                value={otpArray[index]}
                ref={(e) => (inputRefs.current[index] = e)}
                onKeyUp={(e)=>keyDownHandler(e,index)}
                onChange={(e) => otpValueHandler(e, index)}
              ></input>
            );
          })}
        </div>
    </>
  );
}

export default OTPLogin;
