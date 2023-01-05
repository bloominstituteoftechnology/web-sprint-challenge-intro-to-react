// Write your Character component here
import React from "react";

const Character = props => {
    return (
        <div className='Header'>
            <h2 className='Name'>Name: {props.character.name}</h2>
        </div>
    )
}

export default Character;