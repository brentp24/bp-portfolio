import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.title} src={props.name} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.title}
                    </li>
                    <li>
                        <strong>Description:</strong> {props.description}
                    </li>
                    <li>
                        <strong>Link to application</strong> {props.link}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;