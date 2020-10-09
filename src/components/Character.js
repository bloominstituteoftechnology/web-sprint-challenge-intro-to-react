// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'


const StyledCharacter = styled.button`
  color: black;
  background-color: white;
  font-weight: bold;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DetailsDiv = styled.div`
  background-color: white;
  color: blue;
  width: 200px;
  text-align: left;
  
`

const CharDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`

export default function Character(props) {
    const { 
      charNames,
      mass,
      height,
      hair,
      eyes 
      } = props
    
    const [toggle, setToggle] = useState(true)  
    
    if (toggle) {
      return (
        <CharDiv> 
          <StyledCharacter onClick = {event => {setToggle(false)}}>
          {charNames.name}
          </StyledCharacter>
        </CharDiv>
      )
    } 


    return (
      <CharDiv>
        <StyledCharacter onClick = {event => {setToggle(true)}}>
        {charNames.name}
        </StyledCharacter>
        <DetailsDiv>   
          <h2>Mass: {mass}</h2>
          <h2>Height: {height}</h2>
          <h2>Hair Color: {hair}</h2>
          <h2>Eye Color: {eyes}</h2>
        </DetailsDiv>
      </CharDiv>  
    )
}
 
