// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const StyledDiv = styled.div`
  padding: 0;
  margin: 0 auto;
  
  justify-content: center;
  font-size:16px;
  color:white;
  text-align:center;
  border:1px solid rgba(57, 255, 20, 0.5);
  width:50%;
  flex-wrap: wrap;
  height:auto;
  h2 {
      font-weight:bold;
      color: white;
     text-align:center
      width:50%;
      height:auto;
  }
  p{
      
      color: #54ad7a;
      display:flex;
      font-size:18px;
      justify-content:center;
      
  }
`

export default function Character({data}) {

  return (
    <StyledDiv>      
    <h2> {data.name} </h2> 
     <p>DOB: {data.birth_year}</p>
    </StyledDiv>
  )
}