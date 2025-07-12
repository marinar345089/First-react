import React from "react";
import tshirt1 from "../assets/tshirt1.svg";
import tshirt2 from "../assets/tshirt2.svg";
export default function Gallery() {
  return (
    <div>
      <img src={tshirt1} alt="" />
      <img src={tshirt2} alt="" />
    </div>
  );
}
