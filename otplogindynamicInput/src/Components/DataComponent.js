import React from "react";
import ProfileImage from "../images/profile.jpg";
import "./index.css";
import OTPLogin from "./OTP";
function DataComponent() {
  return (
    <>
      <div className="mainContainerOtp">
        <h1>OTP LOGIN</h1>
        <OTPLogin inputOtpFeilds={4}></OTPLogin>
      </div>
    </>
  );
}

export default DataComponent;
