// import React, { useState } from "react";
// import { useTheme } from "../theme-context";

// function DarkComponent() {
//   const [toggleButton, setToggleButton]=useState(false)
//   const toggleButtonHandler = (e) => {
//     setToggleButton(e.target.checked);
//     let bodyElement = document.querySelector("body");
//     e.target.checked
//     ? bodyElement.setAttribute("data-theme", "dark")
//     : bodyElement.setAttribute("data-theme", "light");
//   };
//   return (
//     <>
//       <p className="toggleSwitchContainer">
//       <h6>Theme</h6> 
//         <label class="toggleSwitch" >
//           <input type="checkbox" value={toggleButton} onClick={toggleButtonHandler}/>
//           <span>
//             <span>Light</span>
//             <span>Dark</span>
//           </span>
//           <a></a>
//         </label>
//       </p>
//     </>
//   );
// }

// export default DarkComponent;






import React from "react";
import { useTheme } from "../theme-context";

function DarkComponent() {
  const {isDarkMode, toggleButtonHandler}=useTheme()
  return (
    <>
      <p className="toggleSwitchContainer">
      <h6>Theme</h6> 
        <label class="toggleSwitch" >
        <input type="checkbox" value={isDarkMode} onClick={toggleButtonHandler}/>
          <span>
            <span>Light</span>
            <span>Dark</span>
          </span>
          <a></a>
        </label>
      </p>
    </>
  );
}

export default DarkComponent;
















// const {isDarkMode, toggleButtonHandler}=useTheme()



{/* <label class="toggleSwitch" onClick={toggleButtonHadler}> */}



{/* <input type="checkbox" value={isDarkMode} onClick={toggleButtonHandler}/> */}