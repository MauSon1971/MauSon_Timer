import React from "react";

const StartStopButton = ({ isActive, onToggle }) => {
  return (
    <button
      className={`btn-start-stop ${isActive ? "stop" : "start"}`}
      onClick={onToggle}
    >
      {isActive ? "STOP" : "START"}
    </button>
  );
};

export default StartStopButton;