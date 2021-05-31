import React, {useState} from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
width: 25vw;
border: 5px solid green;
margin: auto;
`;

const StyledDiv = styled.div`
border: pink solid 5px;
margin: 10px;
padding: 3px;
background-color: black;
padding: 10px;
`;

const StyledName = styled.h2`
color: white;
font-size: 24px;
text-transform: uppercase;
background-color: dodgerblue;
letter-spacing: 1px;
`;

const StyledData = styled.p`
color: white;
font-size: 18px;
line-height: 2;
`;

export default function Character(props) {
   const {charactersList, charData, charName} = props;

   return (
    <StyledContainer>
        {charactersList.map((char) => {
            return (
                <StyledDiv>
                   <StyledName>{char.name}</StyledName>
                       <StyledData>
                           <div>Height: {char.height}</div>
                           <div>Hair Color: {char.hair_color}</div>
                           <div>Birth Year:{char.birth_year}</div>
                           <div>Weight: {char.mass}</div>
                       </StyledData>
               </StyledDiv>
            )
        })}; 
    </StyledContainer>   
   )
}