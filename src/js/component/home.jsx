import React, { useState } from "react";
import Timer from "./Timer.jsx";
import CountDown from "./CountDown.jsx";

const Home = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [inputDateTime, setInputDateTime] = useState("");

  const handleSetDate = () => {
    if (!inputDateTime) {
      alert("Por favor selecciona una fecha válida.");
      return;
    }

    const selectedTime = new Date(inputDateTime).getTime();
    const now = Date.now();

    if (isNaN(selectedTime) || selectedTime <= now) {
      alert("La fecha debe estar en el futuro y tener un formato válido.");
      return;
    }

    console.log("Nueva Fecha Objetivo:", inputDateTime);
    setTargetDate(inputDateTime); // Actualizar solo si es válida
  };

  return (
    <div className="container-fluid vh-100 p-0">
      {/* Sección del cronómetro */}
      <div className="row h-50 border-bottom border-dark chronometer-section">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div>
            <div className="text-center my-3">
              <h1 className="title-chronometer">
                <span className="name">MauSon</span>{" "}
                <span className="project-chronometer">Chronometer</span>
              </h1>
            </div>
            <Timer />
          </div>
        </div>
      </div>

      {/* Sección del countdown */}
      <div className="row h-50 countdown-section">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <div>
            <div className="text-center my-3">
              <h1 className="title-chronometer">
                <span className="name">MauSon</span>{" "}
                <span className="project-countdown">CountDown</span>
              </h1>
            </div>

            <div className="row g-2 align-items-center justify-content-center mb-3">
              <div className="col-auto">
                <input
                  type="datetime-local"
                  className="form-control"
                  value={inputDateTime}
                  onChange={(e) => setInputDateTime(e.target.value)}
                  style={{ maxWidth: "300px" }}
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary" onClick={handleSetDate}>
                  Set
                </button>
              </div>
            </div>

            <CountDown targetDate={targetDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;