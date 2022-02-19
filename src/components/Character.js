import React from "react";


const Character = ({character}) => {

    return(
        <article > 
        <h2>{character.name}</h2>
        <p>{character.height}</p>
        <p>{character.mass}</p>
        <p>{character.birth_year}</p>  
        <p>{character.gender}</p>  
        </article>
    )
}

// Write your Character component here
export default Character