import React from "react";

const Card = () => {

    return (
        <div className="text-center">
            <div className="cardUser border border-1 d-flex flex-column">
                <img src="https://picsum.photos/200" className="card-img-top" alt="Image01" />
                <div className="card-body flex-grow-1 d-flex flex-column my-3">
                    <h5 className="card-title py-3">Card title</h5>
                    <p className="card-text px-3">Lorem ipsum odor amet, consectetuer adipiscing elit. Vivamus vestibulum euismod semper placerat varius donec. Lacinia nibh volutpat dict

.</p>
                </div>
                <div className="card-footer border-top border-1 py-2 mt-auto align-content-center">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    );
}

export default Card;