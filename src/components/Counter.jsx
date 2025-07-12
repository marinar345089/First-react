import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function plusCount() {
    setCount((prev) => prev + 1);
    console.log(count, "+");
  }
  function minusCount() {
    setCount((prev) => prev - 1);
    console.log(count, "-");
  }
  console.log(count);
  return (
    <div>
      <button onClick={minusCount}>-</button>
      <span>{count}</span>
      <button onClick={plusCount}>+</button>
    </div>
  );
}
