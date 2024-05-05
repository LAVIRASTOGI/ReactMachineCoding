import React from "react";

function ProgressBarContainer({ progressValue }) {
  return (
    <>
      <div className="rounded-full bg-gray-400 w-full md:w-1/2 mx-auto mt-8 relative">
        <div
          className={`bg-green-500 rounded-full w-full p-6`}
          style={{ width: `${progressValue}%` }}
        ></div>
        <p
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            progressValue <= 50 ? "text-black" : "text-white"
          }`}
        >
          {progressValue}%
        </p>
      </div>
    </>
  );
}

export default ProgressBarContainer;
