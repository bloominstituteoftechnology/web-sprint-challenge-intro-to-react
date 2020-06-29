// Write your Character component here
import React from "react";
import App from "../App";

const Characters = props => {
    return (
        <div className="App">
                <div>
                 <h3>Name: {props.character.name}</h3>
                 <h3>Gender: {props.character.gender} </h3>
                 <h3>Home: {props.character.homeworld}</h3>
                 <img url={props.character.img_url} />
                </div>             
        </div>
    )
}

export default Characters;