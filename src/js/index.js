//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let contador = 0;




//render your react application
setInterval(() => {
    const segundos = contador % 10;
    const segundosDecenas = Math.floor((contador % 6) / 10).toString();
    const minutos = Math.floor((contador / 60) % 10 ).toString().padStart(1,0);
    const minutosDecenas = Math.floor((contador / 60 ) / 10).toString().padStart(1,0);
    const horas = Math.floor((contador / 3600) % 10).toString().padStart(1,0);
    const horasDecenas = Math.floor((contador/3600) / 10).toString().padStart(1,0);
    contador++;
    ReactDOM.createRoot(document.getElementById('app')).render(<Home second={segundos} secondTens={segundosDecenas} minutes={minutos} 
        minutesTens={minutosDecenas} hours={horas} hoursTens={horasDecenas}/>);
}, 1000); // el componente se renderiza cada 1s



// {
//   contador = 0;
//   let timer = null;
//   const timerDisplay = document.getElementById("timer");

//   //Inicia el reloj, calcula minutos y segundos y los pinta en el html
//   function startTimer() {
//     timer = setInterval(() => {
//       contador++;
//       horas = Math.floor((contador / 3600)%24).toString(); // Calculo las horas
//       minutos = Math.floor((contador / 60) %60).toString(); //formula para calcular los minutos 
//       segundos = Math.floor(contador % 60).toString(); //Calcula el resto de los minutos(seg)
//       timerDisplay.textContent = `${minutos} ${segundos}`;
//       }
//     }, 1000);
// }