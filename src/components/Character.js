// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
  text-align: center;
  align-items:center;
  margin-top:1%;
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid black;
  
`

export default function Character({info}) {

  return ( 
      <StyledCharacter>      
          <p>Name: {info.name}</p> 
          <p>Weight: {info.mass}</p>
          <p>Gender: {info.gender}</p>
          <p>Date of Birth: {info.birth_year}</p>
      </StyledCharacter>
  )
} 