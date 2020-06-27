import React from 'react'

function Character({name, height, mass, hairColor, skinColor}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Height : {height}</p>
            <p>Mass : {mass}</p>
            <p>Hair Color : {hairColor}</p>
            <p>Skin Color : {skinColor}</p>
        </div>
    )
}

export default Character
