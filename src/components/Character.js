// Write your Character component here
import React from "react";

const Character = (props) => {
    const { name, height } = props.starWars
    return (
        <div>
            <h1>{name}</h1>
            <h2>{height}</h2>
        </div>
    );
};

export default Character;