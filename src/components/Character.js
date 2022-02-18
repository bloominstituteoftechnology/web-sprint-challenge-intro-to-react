// Write your Character component here
import React, {useState, useEffect} from 'react'
import style from 'styled-components'
import axios from 'axios'
import {data} from '../mocks/handlers'
// const StyledCharacter= style.div`
// display: flex;

// `

const CharacterItem = (props) => {

    const {character} = props
    
  
   

   
    return(
       <div >
        <h2>{character.name}</h2>
        <button>Want To Learn More?</button>
          {/* <p>{`hailing from ${character.homeworld}, ${character.name} is a  human with ${character.hair_color} hair, and ${character.eye_color} eyes.`}</p> */}
      </div>
    )
}


export default CharacterItem