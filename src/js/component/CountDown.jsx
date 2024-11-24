import React, { useState, useEffect } from "react";
import { CountDownDigiBox } from "./CountDownDigiBox";
import { calculateRemainingTime } from "./JsTools";

const CountDown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateRemainingTime(null, 0) // Comienza desde 0 segundos
  );
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (targetDate) {
      setTimeLeft(calculateRemainingTime(targetDate));
    } else {
      setTimeLeft(calculateRemainingTime(null, 0));
    }
  }, [targetDate]);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft.totalSeconds > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev.totalSeconds <= 1) {
            clearInterval(interval);
            alert("TIMEOUT");
            return calculateRemainingTime(null, 0);
          }
          return calculateRemainingTime(null, prev.totalSeconds - 1);
        });
      }, 1);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const resetCountDown = () => {
    setIsActive(false);
    setTimeLeft(calculateRemainingTime(null, 0)); // Reinicia a 0
  };

  const toggleStartStop = () => {
    setIsActive((prev) => !prev);
  };

  const {
    diasDecenas,
    diasUnidades,
    horasDecenas,
    horasUnidades,
    minutosDecenas,
    minutosUnidades,
    segundosDecenas,
    segundosUnidades,
  } = timeLeft;

  return (
    <div className="text-center">
      <div className="digital-timer mx-auto mb-3">
        <CountDownDigiBox title="Días" tens={diasDecenas} units={diasUnidades} />
        <span className="timer-colon">:</span>
        <CountDownDigiBox title="Horas" tens={horasDecenas} units={horasUnidades} />
        <span className="timer-colon">:</span>
        <CountDownDigiBox title="Minutos" tens={minutosDecenas} units={minutosUnidades} />
        <span className="timer-colon">:</span>
        <CountDownDigiBox title="Segundos" tens={segundosDecenas} units={segundosUnidades} />
      </div>

      <div className="mt-3">
        <button
          className={`btn btn-${isActive ? "danger" : "success"} mx-2`}
          onClick={toggleStartStop}
        >
          {isActive ? "STOP" : "START"}
        </button>
        <button className="btn btn-primary mx-2" onClick={resetCountDown}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default CountDown;