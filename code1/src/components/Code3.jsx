import React, { useState, useEffect } from "react";

const Code3 = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Clock </h2>
      <h1>{time.toLocaleDateString()}</h1>
    </div>
  );
};

export default Code3;
