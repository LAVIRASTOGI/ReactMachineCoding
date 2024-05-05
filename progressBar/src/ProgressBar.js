import React, { useEffect, useState } from "react";
import ProgressBarContainer from "./ProgressBarContainer";

function ProgressBar({ maxValue }) {
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress <= maxValue) {
          return newProgress;
        } else {
            clearInterval(timer);
            return 100;
          
        }
      });
    }, 100);

     return () => clearInterval(timer);
  }, [maxValue,progressValue]);

  return (
    <div>
      <ProgressBarContainer progressValue={progressValue} />
    </div>
  );
}

export default ProgressBar;
