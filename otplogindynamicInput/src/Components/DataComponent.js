import React from "react";
import ProfileImage from "../images/profile.jpg";
import './index.css'
import OTPLogin from "./OTP";
function DataComponent() {
  return (
    <>
    
     <OTPLogin inputOtpFeilds={4}></OTPLogin>
    </>
  );
}

export default DataComponent;
