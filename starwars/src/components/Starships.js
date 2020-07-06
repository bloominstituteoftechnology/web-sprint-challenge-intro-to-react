import React from 'react'

const StarshipComponent = ({ starship }) => {
    return (
        <div>
            <h1>{starship.name}</h1>
            <p>{starship.model}</p>
            <p>{starship.manufacturer}</p>
            <p>{starship.hyperdrive_rating}</p>
            <p>{starship.starship_class}</p>
        </div>
    )
}

export default StarshipComponent;
