import React from "react";

// included modules
import Card from "./Card";

//create your first component
const Home = ({ second, secondTens, minutes, minutesTens, hours, hoursTens }) => {
	return (
		<div className="container-fluid p-0 m-0">
			<div className="timer1 row mb-2 d-flex justify-content-center ">
				<Card second={second} segundosDecenas={secondTens} />
			</div>
			<div className=" d-flex justify-content-center align-items-center">
			<div>
					<h1>{hoursTens}</h1>
				</div>
				<div>
					<h1>{hours}</h1>
				</div>
				<div>
					<h1>{minutesTens}</h1>
				</div>
				<div>
					<h1>{minutes}</h1>
				</div>
				<div>
					<h1>{secondTens}</h1>
				</div>
				<div>
					<h1>{second}</h1>
				</div>

			</div>

			<div className="timer2">
				<p>Aqui reloj 2</p>
			</div>

		</div>
	);
};

export default Home;
