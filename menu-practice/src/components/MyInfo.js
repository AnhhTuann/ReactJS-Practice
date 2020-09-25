import React, { useState, useEffect } from "react";

function MyInfo() {
  const fistName = "Tuan";
  const lastName = "Nguyen";

  return (
    <div className="info">
      <h1>My name is {fistName + " " + lastName}</h1>
    </div>
  );
}

export default MyInfo;
