import React, { useEffect, useState } from "react";
import { countDownDateAndTime } from "countdown-date-time";

const CountDown = () => {
  const conduct_date = "2026-09-25 16:54:00";
  const [count,setCount] = useState({})

  useEffect(() => {
    setInterval(() => {
      const countDown = countDownDateAndTime(conduct_date);
      setCount(countDown)
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mx-auto pt-10 gap-7.5">
        <div className="size-31.25 rounded-[20px] p-5 bg-white/10 backdrop-blur-md text-white text-center">
          <h2 className="text-[40px] font-bold ">{count.days}</h2>
          <h6 className="text-[16px]">Days</h6>
        </div>
        <div className="size-31.25 rounded-[20px] p-5 bg-white/10 backdrop-blur-md text-white text-center">
          <h2 className="text-[40px] font-bold ">{count.hours}</h2>
          <h6 className="text-[16px]">Hours</h6>
        </div>
        <div className="size-31.25 rounded-[20px] p-5 bg-white/10 backdrop-blur-md text-white text-center">
          <h2 className="text-[40px] font-bold ">{count.minutes}</h2>
          <h6 className="text-[16px]">Minutes</h6>
        </div>
        <div className="size-31.25 rounded-[20px] p-5 bg-white/10 backdrop-blur-md text-white text-center">
          <h2 className="text-[40px] font-bold ">{count.seconds}</h2>
          <h6 className="text-[16px]">Seconds</h6>
        </div>
      </div>
    </>
  );
};

export default CountDown;
