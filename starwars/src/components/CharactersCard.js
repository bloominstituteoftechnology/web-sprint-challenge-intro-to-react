import React from 'react'


const CharacterCard = props => {
    return (
        <ul>
                <h3>{props.name}</h3>
           
                <p>Height: {props.height} </p>
                <p>Mass: {props.mass}</p> 
                <p>Birth Year: {props.birthYear} </p>
                <p>Star Ships: {props.starShips}</p> 
                <p>{props.homeWorld}</p>

            
        </ul>
        
       
    
    )
    
}

export default CharacterCard