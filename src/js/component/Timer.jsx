import React, { useEffect, useState } from "react";
import StartStopButton from "./buttonStartStop.jsx";
import ResetButton from "./buttonReset.jsx";
import { TimerDigiBlock } from "./TimerDigiBlock.jsx";
import { calculateRemainingTime } from "./JsTools.jsx"; // Importa la función

const Timer = () => {
    const [contador, setContador] = useState(0); // Contador en segundos
    const [activo, setActivo] = useState(false); // Estado de start/stop

    useEffect(() => {
        let intervalo;
        if (activo) {
            // Incrementa el contador cada segundo si está activo
            intervalo = setInterval(() => {
                setContador((prev) => prev + 1);
            }, 1); // Intervalo de 1 segundo
        }
        return () => clearInterval(intervalo); // Limpia el intervalo
    }, [activo]);

    const resetCronoTime = () => {
        // Reinicia el temporizador
        setActivo(false);
        setContador(0);
    };

    const toggleStartStop = () => {
        // Alterna entre iniciar y pausar el temporizador
        setActivo((prev) => !prev);
    };

    // Usa `calculateRemainingTime` para desglosar el contador
    const {
        segundosUnidades,
        segundosDecenas,
        minutosUnidades,
        minutosDecenas,
        horasUnidades,
        horasDecenas,
    } = calculateRemainingTime(null, contador);

    return (
        <div className="text-center">
            <div className="cardUser border border-1 d-flex flex-column">
                <div className="card-body flex-grow-1 d-flex flex-column my-3">
                    <div className="card-content px-3">
                        <TimerDigiBlock
                            segundosUnidades={segundosUnidades}
                            segundosDecenas={segundosDecenas}
                            minutosUnidades={minutosUnidades}
                            minutosDecenas={minutosDecenas}
                            horasUnidades={horasUnidades}
                            horasDecenas={horasDecenas}
                        />
                    </div>
                </div>

                <div className="card-footer border-top border-1 p-2 g-2 align-content-center">
                    <StartStopButton isActive={activo} onToggle={toggleStartStop} />
                    <ResetButton onReset={resetCronoTime} />
                </div>
            </div>
        </div>
    );
};

export default Timer;