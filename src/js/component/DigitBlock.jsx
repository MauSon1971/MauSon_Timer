import React, { useState, useEffect, useRef } from "react";

const DigitBlock = ({ value }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [flip, setFlip] = useState(false);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (value !== prevValue) {
      setFlip(true);
      setTimeout(() => {
        setFlip(false);
        setPrevValue(value);
      }, 800); // Duración de la animación
    }
  }, [value, prevValue]);

  useEffect(() => {
    if (topRef.current && bottomRef.current) {
      topRef.current.textContent = prevValue;
      bottomRef.current.textContent = prevValue;
    }
  }, [prevValue]);

  return (
    <div className={`figure ${flip ? "flip" : ""}`}>
      {/* Parte superior */}
      <span className="top" ref={topRef}>{prevValue}</span>
      {/* Parte superior detrás */}
      <span className="top-back">
        <span>{value}</span>
      </span>
      {/* Parte inferior */}
      <span className="bottom" ref={bottomRef}>{prevValue}</span>
      {/* Parte inferior detrás */}
      <span className="bottom-back">
        <span>{value}</span>
      </span>
    </div>
  );
};

export default DigitBlock;