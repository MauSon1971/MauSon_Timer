import React from "react";

export const CountDownDigiBox = ({ title, tens, units }) => {
  return (
    <div className="timer-block">
      {title && <div className="timer-title">{title}</div>} {/* Título centrado */}
      <div className="timer-digits">
        <span className="timer-digit-box">{tens}</span>
        <span className="timer-digit-box">{units}</span>
      </div>
    </div>
  );
};