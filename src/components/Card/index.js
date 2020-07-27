import React from "react";
import {Button} from "reactstrap";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.title} src={props.image} />
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
                        <Button className={"btn btn-dark"} style={{margin: "10px"}} href={props.link}>App</Button> 
                        <Button style={{margin: "10px"}} href={props.github}>GitHub</Button> 
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;