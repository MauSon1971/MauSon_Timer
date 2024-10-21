import React from "react";

const Card = ({second}) => {
    const contador = 0;
    const startTimer = () => {
    return 0
    }
    return (
        <div className="text-center">
            <div className="cardUser border border-1 d-flex flex-column">
                {/* <img src="https://picsum.photos/200" className="card-img-top" alt="Image01" /> */}
                <div className="card-body flex-grow-1 d-flex flex-column my-3">
                    <h5 className="card-title py-3">{second}</h5>
                    <p className="card-content px-3">Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vestibulum euismod semper placerat varius donec. Lacinia nibh volutpat dict.</p>
                </div>
                <button onClick={startTimer()}> </button>




                <div className="card-footer border-top border-1 py-2 mt-auto align-content-center">
                    <a href="#" className="btn btn-primary">Start!</a>
                </div>
            </div>
        </div>
    );
}

export default Card;