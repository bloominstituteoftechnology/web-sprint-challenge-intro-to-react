// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
    color:white;
    display:block;
    text-align: left;
    width: 60%;
    margin-left:20%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    border:3px solid darkgreen;
    padding:0px 20px;
    background-color: rgba(0,200,0,0.2);
`
const StyledH1 = styled.h1`
    display:inline;
`
const StyledBD = styled.h2`
    display:inline;
    color:#301934;
    background-color:gray;
    padding:5px;
    border-radius: 10px 20px;
`


const Character = props => {
    const { data } = props;
    console.log(data)
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledDiv>
        <StyledH1>{data.name}</StyledH1>
        <StyledBD>{data.birth_year}</StyledBD>
    </StyledDiv>
  );
}
export default Character;