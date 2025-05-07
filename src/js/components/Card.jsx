// Importación inicial de React
import React from "react";

const Card = ({title, text, imageUrl}) => {
    return (
        <div className="card m-2" style={{width:'18rem'}}>
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-tittle">{title}</h5>
                <p className="card-text">{text}</p>
                <a className="btn btn-primary" href="#">Read More</a>
            </div>
        </div>
    );
};

export default Card;


