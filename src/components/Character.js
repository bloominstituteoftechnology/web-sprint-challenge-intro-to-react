// Write your Character component here
import React from 'react';
import styled from 'styled-components'
import Details from './Details';

const StyledChar = styled.div`
  display:flex;
  justify-content: ;
  font-size:15px;


`

export default function Character({info}) {
  
  return (
    <StyledChar>
      <h2>{info.name}: 
      <button onClick={Details}>
        See details
      </button></h2>


    </StyledChar>  
  )
}
