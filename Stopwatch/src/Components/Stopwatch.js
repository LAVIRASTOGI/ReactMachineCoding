import React, { useEffect, useState } from "react";
import "./stopwatch.css";
function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeInterval, setTimeInterval] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId= setInterval(() => {
        setTimeInterval((prev) => prev + 1);
      }, 1000);
    }
    return () =>{
      clearInterval(intervalId);
    } 
  }, [isRunning]);

  const startHandler = () => {
    setIsRunning(true);
  };
  const stopHandler = () => {
    setIsRunning(false);
  };
  const resetHandler = () => {
    setTimeInterval(0);
  };

  const formattedTime = (timeInterval) => {
    const hours = Math.floor(timeInterval / 3600);
    const minutes = Math.floor((timeInterval % 3600) / 60);
    const seconds = timeInterval % 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <p>
            <span className="time">{formattedTime(timeInterval)}</span>
          </p>{" "}
          <br />
          <button className="btn-start" onClick={startHandler}>
            Start
          </button>
          <button className="btn-stop" onClick={stopHandler}>
            Stop
          </button>
          <button className="btn-reset" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
