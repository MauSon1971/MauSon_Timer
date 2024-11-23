import React, { useEffect, useState } from "react";
import Timer from "./Timer.jsx";
import Countdown from "./Countdown.jsx";

const Home = () => {


  return (
    <div className="container-fluid vh-100 p-0">
      <div className="row h-50 border-bottom border-dark">
        {/* Primera fila */}
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div>
            <div className="text-center my-3">
              <h1 className="title-chronometer">
                <span className="name">MauSon</span> <span className="chronometer">Chronometer</span>
              </h1>
            </div>
            <Timer />
          </div>
        </div>
      </div>

      <div className="row h-50">
        {/* Segunda fila */}
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div>
            <h1>Reloj 2</h1>
            <Countdown targetDate="2024-12-31T23:59:59" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;