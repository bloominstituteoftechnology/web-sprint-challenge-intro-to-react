// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledChar = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 2px solid black;
  text-align: center;
  align-items:center;
  


`

export default function Character({info}) {
  
  return ( 
      <StyledChar>      
          <h2>Details:</h2>
          <p>Name: {info.name}</p> 
          <p>Weight: {info.mass}</p>
          <p>Gender: {info.gender}</p>
          <p>DOB: {info.birth_year}</p>
      </StyledChar>
  )
}
