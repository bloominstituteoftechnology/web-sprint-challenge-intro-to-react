// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Character = (props) => {
    console.log(props, "Character Props");
    return (
        <div className="character-name">
          <h3>{props.name}</h3>  
          <div className="creation">
            <p>{props.birth_year}</p>
            <p>{props.gender}</p>
        </div>
        <div className="character-specs">
            <p>{props.hair_color}</p>
            <p>{props.skin_color}</p>
            <p>{props.eye_color}</p>
            <p>{props.mass}</p>
            <p>{props.height}</p>
        </div>
        </div>
        
    )
}


export default Character

