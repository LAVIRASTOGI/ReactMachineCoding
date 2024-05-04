import React, {useState} from "react";
const starRatingEle = new Array(5).fill(0).map((ele, index) => index + 1);

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="pt-7 flex gap-5 justify-center h-auto">
      {starRatingEle.map((ele, index) => {
        return (
          <span
            className="cursor-pointer inline-block"
            key={index}
            onClick={() => setRating(ele)}
            onMouseEnter={() => setHover(ele)}
            onMouseLeave={() => setHover(0)}
          >
            <svg
              className={`w-8 h-8 ${
                ele <= (hover || rating) ? `text-yellow-300` : `text-gray-300`
              }  fill-current`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.31 6.91.79-5 4.86 1.18 6.88-6.18-3.25-6.18 3.25 1.18-6.88-5-4.86 6.91-.79z" />
            </svg>
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
