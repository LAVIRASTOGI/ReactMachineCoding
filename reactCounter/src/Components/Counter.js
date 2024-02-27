import React, { useState } from "react";
import './counter.css'

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((counter) => counter + 1);
  };
  const decrementHandler = () => {
    setCounter((counter) => counter - 1);
  };
  return (
    <>
      <div className="counterContainer">
      <h1>Counter:{counter}</h1>
      <div className="buttonContainer">
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>
      </div>
     
    </div>
    </>
  
  );
}

export default Counter;
