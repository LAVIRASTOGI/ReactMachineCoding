import React from "react";
import "./index.css";
import OTPLogin from "./OTP";
function DataComponent() {
  return (
    <>
      <div className="mainContainerOtp">
        <h1>OTP LOGIN</h1>
        <OTPLogin otpinputfeilds={5}></OTPLogin>
      </div>
    </>
  );
}

export default DataComponent;
