// Write your Character component here
import React from "react";
import App from "../App";

const Character = props => {
    return (
        <div className='Featured'>
            <h2 className='Name'>Name: {props.data.name}</h2>
            <p>Height: {props.data.height}</p>
            <p>Mass: {props.data.mass}</p>
            <p>Eye Color: {props.data.eye_color}</p>
            <p>Birth Year: {props.data.birth_year}</p>
        </div>
    )
}

export default Character;