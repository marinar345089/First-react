import React, { useState } from "react";

export default function List() {
  const [arr, setArr] = useState([1, 2, 3]);
  function clearArr() {
    setArr([]);
  }
  function removeNumber() {
    setArr((prev) => prev.slice(0, -1));
  }

  function addNumber() {
    const lastNumber = arr[arr.length - 1];
    if (lastNumber) {
      setArr((prev) => [...prev, lastNumber + 1]);
    } else {
      setArr([1]);
    }
  }
  return (
    <div>
      <ul>
        {arr.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
      <div>
        <button onClick={addNumber}>Add number</button>
      </div>
      <div>
        <button onClick={removeNumber}>Remove number</button>
      </div>
      <div>
        <button onClick={clearArr}>Clear</button>
      </div>
    </div>
  );
}
