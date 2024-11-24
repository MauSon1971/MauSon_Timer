import React from "react";

const ResetButton = ({ onReset }) => {
  return (
    <button className="btn btn-primary" onClick={onReset}>
      Reset
    </button>
  );
};

export default ResetButton;