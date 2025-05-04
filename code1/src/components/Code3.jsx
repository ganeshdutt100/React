import React, { useState, useEffect } from "react";

const Code3 = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const addZero = (num) => {
    return num < 10 ? "0" + num : num;
  };
  const hours = addZero(time.getHours());
  const minutes = addZero(time.getMinutes());
  const seconds = addZero(time.getSeconds());

  return (
    <div>
      <h2>Clock </h2>
      <h1>{time.toLocaleDateString()}</h1>

      <div>
        {hours} : {minutes}: {seconds}
      </div>
    </div>
  );
};

export default Code3;
