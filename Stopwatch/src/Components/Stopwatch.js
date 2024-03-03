import { useEffect, useState } from "react";
import "./stopwatch.css";
function Stopwatch() {
  const [timervalue, setTimerVal] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let intervalId;
    if(isRunning){
      intervalId=setInterval(()=>{
       setTimerVal(prev=>prev+1)
      },1000)
      console.log('set',intervalId)
    }
    return(()=>{
      console.log('claer',intervalId)
      clearInterval(intervalId)
    })
  },[isRunning])

  const formattedValue = (timerVal) => {
    //3600
    const sec = Math.floor(timerVal % 60);
    const min = Math.floor((timerVal / 60) % 60);
    const hour = Math.floor(timerVal / 3600);

    return `${hour.toString().padStart(2, "0")}:${min
      .toString()
      .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };
  const startHandler =()=>{
    setIsRunning(true)
  }
  const stopHandler =()=>{
    setIsRunning(false)
  }
  const resetHandler =()=>{
    setIsRunning(false)
    setTimerVal(0)
  }
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <p>
            <span className="time">{formattedValue(timervalue)}</span>
          </p>{" "}
          <br />
          <button className="btn-start" onClick={startHandler}>Start</button>
          <button className="btn-stop" onClick={stopHandler}>Stop</button>
          <button className="btn-reset" onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Stopwatch;
