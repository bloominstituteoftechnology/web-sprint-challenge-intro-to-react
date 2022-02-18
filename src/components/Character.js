// Write your Character component here
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledCharacter= styled.div`
border: 1px solid lemonchiffon;
border-radius: 20%;
margin: 5%
`
const StyledButton= styled.button`
background-color:coral;
color:white;

`
const CharacterItem = (props) => {
    const[button, setButton]= useState(true)
    
    const {character} = props
    

   const buttonClick = () => {
    setButton(!button)
   }

   
    return(
       <StyledCharacter >
        <h2>{character.name}</h2>
        <StyledButton >Want To Learn More?</StyledButton>
          {/* <p>{`hailing from ${character.homeworld}, ${character.name} is a  human with ${character.hair_color} hair, and ${character.eye_color} eyes.`}</p> */}
      </StyledCharacter>
    )
}


export default CharacterItem