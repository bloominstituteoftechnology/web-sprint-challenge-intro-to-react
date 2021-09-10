// Write your Character component here
import React from 'react';
import characterData from '../mocks/handlers'
export default function Character(props) {
    console.log(characterData);
    return (
        <div className='Character div'>
            <h3>{characterData.name}</h3>
            <h3>{characterData.gender}</h3>
            <h3>{characterData.height}</h3>
            <h3>{characterData.mass}</h3>
            <h3>{characterData.birth_year}</h3>
            <h3>{characterData.eye_color}</h3>
            <h3>{characterData.hair_color}</h3>
            <h3>{characterData.skin_color}</h3>
        </div>
    )

        

}


