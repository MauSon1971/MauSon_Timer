import React from "react";

// included modules
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 m-0">
			<div className="timer1 row mb-2 d-flex justify-content-center ">
				<Card/>
			</div>
			<div className="timer2">
				<p>Aqui reloj 2</p>
			</div>

		</div>
	);
};

export default Home;
