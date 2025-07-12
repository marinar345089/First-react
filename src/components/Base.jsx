import React from "react";

export default function Base() {
  const name = "Alex";
  const array = ["Moscow", "St. Petersburg", "Omsk", "Kazan"];
  function sum(a, b) {
    return a + b;
  }
  return (
    <>
      <div>{5 + 5}</div>
      <div>{name}</div>
      <ul>
        {array.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
      <div>{sum(2, 5)}</div>
    </>
  );
}
