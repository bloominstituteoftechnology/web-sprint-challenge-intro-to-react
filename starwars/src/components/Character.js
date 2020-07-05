// Write your Character component here
import React from 'react'

const CharacterComponent = ({ character }) => {
    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
        </div>
    )
}

export default CharacterComponent;
