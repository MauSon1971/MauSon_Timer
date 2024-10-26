import React, { useEffect, useState } from "react";

// included modules
import Card from "./Card";

//create your first component
const Home = () => {
	const [contador, setContador] = useState(0)
	useEffect(() => {
		const intervalo = setInterval(() => {
			setContador((prev) => prev + 1);
			}, 1);
			return () => clearInterval(intervalo);
		},[]);

	const timer = (contador) => {
		const segundos = contador % 10;
		const segundosDecenas = Math.floor((contador / 10) % 10).toString();
		const minutos = Math.floor((contador / 60) % 10).toString().padStart(1, 0);
		const minutosDecenas = Math.floor((contador / 60) / 10).toString().padStart(1, 0);
		const horas = Math.floor((contador / 3600) % 10).toString().padStart(1, 0);
		const horasDecenas = Math.floor((contador / 3600) / 10).toString().padStart(1, 0);
		return { segundos, segundosDecenas, minutos, minutosDecenas, horas, horasDecenas };
	}




	const { segundos, segundosDecenas, minutos, minutosDecenas, horas, horasDecenas } = timer(contador);

	return (
		<div className="containe-principal d-flex vh-100 p-0 m-0">
			<div className="row mb-2 justify-content-center align-items-center">
				<div className="col-12 col-md-6 col-lg-6 text-center">
					<Card second={segundos} secondTens={segundosDecenas} minutes={minutos}
						minutesTens={minutosDecenas} hours={horas} hoursTens={horasDecenas} />
				</div>
				<div className="col-12 col-md-6 col-lg-6 text-center">
					<h1>Reloj 2</h1>
				</div>
				<div className="col-12 col-md-6 col-lg-6 text-center">
					<h1>Reloj 3</h1>
				</div>
				<div className="col-12 col-md-6 col-lg-6 text-center">
					<h1>Reloj 4</h1>
				</div>

			</div>
		</div>

	);
};

export default Home;





