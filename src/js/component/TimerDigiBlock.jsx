import React from "react";

export const TimerDigiBlock = ({
    segundosUnidades,
    segundosDecenas,
    minutosUnidades,
    minutosDecenas,
    horasUnidades,
    horasDecenas,
}) => {
    return (
        <div className="digital-timer mx-auto mb-3">
            <span className="timer-digit-box">{horasDecenas}</span>
            <span className="timer-digit-box">{horasUnidades}</span>
            <span className="timer-colon">:</span>
            <span className="timer-digit-box">{minutosDecenas}</span>
            <span className="timer-digit-box">{minutosUnidades}</span>
            <span className="timer-colon">:</span>
            <span className="timer-digit-box">{segundosDecenas}</span>
            <span className="timer-digit-box">{segundosUnidades}</span>
        </div>
    );
};