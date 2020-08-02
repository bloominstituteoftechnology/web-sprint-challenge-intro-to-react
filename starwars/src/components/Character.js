// Write your Character component here
import React from "react";

function Character(props) {

return (

    <li className="character-info">

        <h2>Character Name: {props.name}</h2>
        <p>Mass:{props.mass}</p>
        <p>height:{props.height}</p>
        <p>gender:{props.gender}</p>
        <p>eye_color:{props.eye_color}</p>
        <p>birth_year:{props.birth_year}</p>

        
        

    
    
    
    
    
    
    </li>

)



    
}

export default Character;
