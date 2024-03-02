import React, { useState } from "react";
import './counter.css'

function Counter() {
const [counter,setCounter] =useState(0);
const incrementHandler=(diffrence)=>{
  setCounter(prev=>prev+diffrence)

}
const decrementHandler=(diffrence)=>{
  setCounter(prev=>prev-diffrence)
}
  return (
    <>
      <div className="counterContainer">
      <h1>Counter:{counter}</h1>
      <div className="buttonContainer">
      <button onClick={()=>incrementHandler(2)}>+</button>
      <button onClick={()=>decrementHandler(2)}>-</button>
      </div>
     
    </div>
    </>
  
  );
}

export default Counter;
