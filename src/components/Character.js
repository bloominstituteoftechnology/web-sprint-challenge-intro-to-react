
import React from "react"
import styled from "styled-components";

export default function Character({props})  {
  
return ( 
  <StyledCharacter>      
        <h3>Name: {props.character.name}</h3>
        <ul>
            <li>BirthDay: {props.character.birth_year}</li>
            <li>HairColor: {props.character.hair_color}</li>
            <li>Height: {props.character.height}</li>
            <li>Gender: {props.character.gender}</li>
            <li>Mass: {props.character.mass}</li>
            <li>Species: {props.character.species}</li>
            </ul>
  </StyledCharacter>
)} 

const StyledCharacter = styled.div`
text-align: center;
align-items:center;

margin-top:1%;

display:flex;
flex-wrap: wrap;
justify-content: space-evenly;

border: 1px solid black;
`