// Write your Character component here
import React from 'react'

export default function Character(props) {

    
    return (
        <div>
        <img src = {props.character.image}/>
        <p>
            {props.character.name}
        </p>
        <p>
            {props.character.species}
        </p>
        <p>
            {props.character.gender}
        </p>
        </div>
    )
}
