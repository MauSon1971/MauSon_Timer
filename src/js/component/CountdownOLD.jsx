
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "../../styles/countdown.css";

const CountdownOLD = ({ targetDate }) => {
  // Referencias para cada dígito
  const refs = useRef({
    days: [useRef(null), useRef(null)],
    hours: [useRef(null), useRef(null)],
    minutes: [useRef(null), useRef(null)],
    seconds: [useRef(null), useRef(null)],
  });

  // Estado para los valores de la cuenta regresiva
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Función para calcular el tiempo restante
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference > 0) {
      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      return { days, hours, minutes, seconds };
    } else {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
  };

  // Animar un dígito específico
  const animateDigit = (ref, newValue) => {
    const [top, bottom] = ref.children;

    // Cambiar valor del fondo
    top.textContent = newValue;

    // Animar con GSAP
    gsap.fromTo(
      top,
      { rotationX: 0 },
      {
        rotationX: -180,
        duration: 0.8,
        transformPerspective: 300,
        ease: "power1.out",
        onComplete: () => {
          bottom.textContent = newValue;
          gsap.set(top, { rotationX: 0 });
        },
      }
    );
  };

  // Actualizar y animar los dígitos
  const updateDigits = (prevTime, newTime) => {
    Object.keys(newTime).forEach((unit) => {
      const refsArray = refs.current[unit];
      const newDigits = newTime[unit];
      const prevDigits = prevTime[unit];

      newDigits.split("").forEach((digit, index) => {
        if (digit !== prevDigits[index]) {
          animateDigit(refsArray[index].current, digit);
        }
      });
    });
  };

  // Efecto para inicializar y actualizar la cuenta regresiva
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = calculateTimeLeft();
      updateDigits(time, newTime);
      setTime(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="countdown">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div className="bloc-time" key={unit}>
          <span className="count-title">{unit.toUpperCase()}</span>
          <div className="figure-container">
            {time[unit].split("").map((digit, index) => (
              <div className="figure" ref={refs.current[unit][index]} key={index}>
                <span className="top">{digit}</span>
                <span className="bottom">{digit}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownOLD;