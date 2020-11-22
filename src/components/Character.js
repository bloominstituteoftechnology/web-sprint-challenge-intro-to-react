// Write your Character component here
import React from 'react';

const Character = ( props ) => {
    console.log(props)
    
        return (
            <div className = 'CharacterCard'>
            <h3 className = 'title' >{props.character.name}</h3>
            <img alt = 'rick and morty character' src = { props.character.image }></img>
            <li className = 'gender' >Gender: { props.character.gender }</li>
            <li className = 'species'>Species: { props.character.species }</li>
            <li className = 'location'>Location: { props.character.location.name }</li>
            <li className = 'origin'>Origin: { props.character.origin.name }</li>
            <li className = 'status'>Status: { props.character.status }</li>
            </div>
        )


  }
export default Character





