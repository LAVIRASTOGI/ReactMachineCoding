import React, { useState } from "react";

function DarkComponent() {
  const [toggleButton, setToggleButton]=useState(false)
  const toggleButtonHandler = (e) => {
    setToggleButton(e.target.checked);
    let bodyElement = document.querySelector("body");
    e.target.checked
    ? bodyElement.setAttribute("data-theme", "dark")
    : bodyElement.setAttribute("data-theme", "light");
  };
  return (
    <>
      <div className="toggleSwitchContainer">
      <h6>Theme</h6> 
        <label className="toggleSwitch" >
          <input type="checkbox" value={toggleButton} onClick={toggleButtonHandler}/>
          <span>
            <span>Light</span>
            <span>Dark</span>
          </span>
          <a></a>
        </label>
      </div>
    </>
  );
}

export default DarkComponent;




