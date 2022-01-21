// Write your Character component here
import React from 'react'

const characterCard = (props) => {
    
        const character = props.character

        return (
        
     <article>
     <h1 className="Header">{character.name}</h1>
     <p> height: {character.height}</p>
     <p> mass: {character.mass}</p>
     <p> hair_color: {character.hair_color}</p>
     <p> skin_color: {character.skin_color}</p>
     <p> eye_color: {character.eye_color}</p>
     <p> birth_year: {character.birth_year}</p>
     <p>gender:{character.gender}</p>
      </article>
      )
        

    
    
}
export default characterCard