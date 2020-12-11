import React from "react";
import Styled from "styled-components";

function CharacterCard(props) {
  const { character } = props;
  console.log(props);

  return (
    <StyledDiv>
      <StyledImg src={character.image} alt={character.name} />

      <table>
        <StyledH2>{character.name}</StyledH2>
        <tr>
          <StyledTD> </StyledTD>
          <StyledTD>Gender: {character.gender}</StyledTD>
          <StyledTD>Origin: {character.origin.name}</StyledTD>
          <StyledTD>Location: {character.location.name}</StyledTD>
          <StyledTD>Species: {character.species}</StyledTD>
          <StyledTD>Status: {character.status}</StyledTD>
        </tr>
      </table>
    </StyledDiv>
  );
}

const StyledDiv = Styled.div`
    margin: 10px;
    background: #21224e;
    width: 40%;
    display: inline-flex;
`;

const StyledImg = Styled.img`
margin: 10px;
border: 3px #7ed048 solid;
/* width: 200px; */
/* height: auto; */
`;
const StyledH2 = Styled.h2`
margin-top: 10px;
  color: #07acc4;
  font-weight:700;
  text-wrap: wrap;
`;
const StyledTD = Styled.p`
font-size: 18px;
  margin: 2rem;
  color: #7ed048;
  text-align: left;
`;

export default CharacterCard;
