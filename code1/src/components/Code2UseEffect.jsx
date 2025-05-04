import React, { useState, useEffect } from "react";

const Code2UseEffect = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    console.log(`count Updated ${count}`);
  }, [count]);
  return (
    <div>
      {/* useEffect(function , [dependencies]);
       useEffect(()=>{console.log("stm")}); */}
      <h1>Count : {count} </h1>
      <button
        className="bg-black text-white rounded px-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {/* <button></button> */}
    </div>
  );
};

export default Code2UseEffect;
