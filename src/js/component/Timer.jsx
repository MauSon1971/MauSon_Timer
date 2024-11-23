import React, { useEffect, useState } from "react";
import StartStopButton from "./buttonStartStop.jsx";
import ResetButton from "./buttonReset.jsx";
import { TimerDigiBlock } from "./TimerDigiBlock.jsx";

const Timer = () => {
    const [contador, setContador] = useState(0);
    const [activo, setActivo] = useState(false);

    useEffect(() => {
        let intervalo;
        if (activo) {
            // Inicia el intervalo solo si "activo" es true
            intervalo = setInterval(() => {
                setContador((prev) => prev + 1);
            }, 1); // 1 segundo de intervalo
        }
        return () => {
            // Limpia el intervalo al desmontar o cuando "activo" cambie
            clearInterval(intervalo);
        };
    }, [activo]);

    const resetCronoTime = () => {
        // Reinicia el contador
        setActivo(false);
        setContador(0);
    };

    //Función para manejar el boton START-STOP
    const toggleStartStop = () => {
        setActivo((prev) => !prev)
    }

    //Función para calcular los digitos
    const cronoTime = (contador) => {
        const segundos = contador % 60;
        const minutos = Math.floor((contador / 60) % 60);
        const horas = Math.floor(contador / 3600);

        const segundosUnidades = (segundos % 10).toString();
        const segundosDecenas = Math.floor(segundos / 10).toString();

        const minutosUnidades = (minutos % 10).toString(); // 
        const minutosDecenas = Math.floor(minutos / 10).toString();

        const horasUnidades = (horas % 10).toString();
        const horasDecenas = Math.floor(horas / 10).toString();

        return {
            segundosUnidades,
            segundosDecenas,
            minutosUnidades,
            minutosDecenas,
            horasUnidades,
            horasDecenas
        };
    };

    // Invoca la lógica del temporizador desestructurando el objeto y creando las variables con los valores de la función cronoTime()
    const {
        segundosUnidades,
        segundosDecenas,
        minutosUnidades,
        minutosDecenas,
        horasUnidades,
        horasDecenas,
    } = cronoTime(contador);

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