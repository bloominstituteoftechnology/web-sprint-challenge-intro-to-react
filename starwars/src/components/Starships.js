import React from 'react'
import styled from "styled-components";

const StarBox = styled.div`
    display: flex;
flex-direction: row;
align-items: flex-start;
align-content: flex-start;
justify-content: space-evenly;
padding: 10vh 0 0;
background-color: rgba(217, 184, 192, 0.7);
color:white;
`;

const InfoDiv = styled.div`
display: flex
flex-direction: column;
max-width: 70%;
`

const StarInfo = styled.p` 
font-size: 16px;
display: flex;
justify-content: space-evenly;

`;

const StyledH1 = styled.h1`
font-size: 25px;
font-weight: bold;
margin: 16px;
color: #33FF38;
padding: 10px;
background-color: black;
border-radius: 25px;
  border: 2px solid #73AD21;

`;

const PlanetsComponent = ({ name, rotation_period, gravity, population, terrain }) => {
    return (
        <StarBox>
        <InfoDiv>
            <StyledH1>{name}</StyledH1>
            <StarInfo style={{fontWeight: "bold", color: "grey"}}>Rotation:</StarInfo> <StarInfo>{rotation_period}</StarInfo>
            <StarInfo style={{fontWeight: "bold", color: "grey"}}>Gravity:</StarInfo> <StarInfo> {gravity}</StarInfo>
            <StarInfo style={{fontWeight: "bold", color: "grey"}}>Population:</StarInfo> <StarInfo> {population}</StarInfo>
            <StarInfo style={{fontWeight: "bold", color: "grey"}}>Terrain Type:</StarInfo> <StarInfo> {terrain}</StarInfo>
        </InfoDiv>
        </StarBox>
    )
}

export default PlanetsComponent;
