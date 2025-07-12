import React from "react";

export default function Condition() {
  const age = 20;
  const isAdmin = false;
  const isActive = false;
  return (
    <div>
      {+age > 18 ? (
        <>
          <h2>Access is permitted</h2> <p>Hi, new user!</p>
        </>
      ) : (
        <h2>Access is restricted</h2>
      )}
      {isAdmin && <p>Admin</p>}
      <div className={isActive ? "box active" : "box"}></div>
    </div>
  );
}
