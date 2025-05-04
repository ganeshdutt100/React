import React, { useState, useEffect } from "react";

export const Code4 = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((x) => x + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
  }, [running]);
  return (
    <div>
      <h2> StopWatch : {seconds}</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setRunning(0)}>Reset</button>

      {/* <button>Reset</button> */}
    </div>
  );
};
