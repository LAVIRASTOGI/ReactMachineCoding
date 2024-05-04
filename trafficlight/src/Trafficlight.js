import React, { useEffect, useState } from "react";
import { trafficLightColor } from "./lightConstant";

function Trafficlight() {
  const [currentColor, setCurrentColor] = useState("green");
  useEffect(() => {
    const { duration, next } = trafficLightColor[currentColor];
    let id = setTimeout(() => {
      setCurrentColor(next);
    }, duration);
    return () => {
      clearTimeout(id);
    };
  }, [currentColor]);

  return (
    <div className="flex gap-4 flex-col bg-gray-950 items-center mx-auto w-24 p-4 m-4">
      {Object.keys(trafficLightColor).map((ele) => {
        console.log(ele);
        return (
          <div
            key={ele}
            className={`w-10 h-10 border ${
              ele === currentColor ? `bg-${ele}-500` : "bg-gray-500"
            }  border-gray-400 rounded-full flex items-center justify-center`}
          ></div>
        );
      })}
    </div>
  );
}

export default Trafficlight;
