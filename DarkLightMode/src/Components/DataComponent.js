import React from "react";
import ProfileImage from "../images/profile.jpg";
import './index.css'
function DataComponent() {
  return (
    <>
      <div className="mainComponent">
        <div className="DescriptionComponent">
          <h2>Hello I am <span style={{color:'#FFA500'}}>Front End Developer</span></h2>
          <h1>Lavi Rastogi</h1>
          <p>
          As a passionate Front End Developer with 8 Years of experience in crafting engaging and user-friendly web experiences. With a keen eye for design and a deep understanding of front end technologies, I specialize in turning static designs into dynamic, interactive, and responsive websites and web applications.
          </p>
        </div>
        <img src={ProfileImage}></img>
      </div>
    </>
  );
}

export default DataComponent;
