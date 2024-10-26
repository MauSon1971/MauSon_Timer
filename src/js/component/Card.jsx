import React from "react";

const Card = ({ second, secondTens, minutes, minutesTens, hours, hoursTens }) => {

    return (
        <div className="text-center">
            <div className="cardUser border border-1 d-flex flex-column">
                <div className="card-body flex-grow-1 d-flex flex-column my-3">
                    <h1>Timer Crono</h1>

                    <div className="digital-timer mx-auto mb-3">
                        <span className="timer-digit-box">{hoursTens}</span>:
                        <span className="timer-digit-box">{hours}</span>:
                        <span className="timer-digit-box">{minutesTens}</span>:
                        <span className="timer-digit-box">{minutes}</span>:
                        <span className="timer-digit-box">{secondTens}</span>:
                        <span className="timer-digit-box">{second}</span>
                    </div>

                    <p className="card-content px-3">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus vestibulum euismod semper placerat varius donec. Lacinia nibh volutpat dictumst.
                    </p>
                </div>

                <div className="card-footer border-top border-1 p-2 g-2 align-content-center">
                    <a href="#" className="btn btn-primary">Start!</a>
                    <a href="#" className="btn btn-primary">Stop!</a>
                    <a href="#" className="btn btn-primary">Reset!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;