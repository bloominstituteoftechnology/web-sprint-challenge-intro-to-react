// Write your Character component here
import React from 'react'

const CharacterComponent = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.status}</p>
            <p>{props.species}</p>
        </div>
    )
}

export default CharacterComponent;
