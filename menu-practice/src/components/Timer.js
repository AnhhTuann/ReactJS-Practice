import React from "react";
import "../style/mainContent.css";
function Timer() {
  const date = new Date();
  const hours = date.getTime();
  let dayOfTime;

  if (hours < 12) {
    dayOfTime = "Morning";
  } else if (hours >= 12 && hours < 17) {
    dayOfTime = "Afternoon";
  } else if (hours >= 17 && hours < 21) {
    dayOfTime = "Evening";
  } else {
    dayOfTime = "Night";
  }

  return (
    <div>
      <p className="time">Good {dayOfTime}</p>
    </div>
  );
}
export default Timer;
