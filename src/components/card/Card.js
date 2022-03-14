import React from "react";
import '../../styles/Card.scss'

const Card = (props) => {
    return (
        <div  className="card">
            <p>ID: {props.id}</p>
            <h4>Name: {props.name}</h4>
        </div>
    );
}

export default Card;