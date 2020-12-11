import React from "react";
import Styled from "styled-components";

export default function CharacterCard(props) {
  const { character } = props;
  console.log(props);

  return (
    <StyledDiv>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <StyledP>Gender: {character.gender}</StyledP>
      <StyledP>Origin: {character.origin.name}</StyledP>
      <StyledP>Location: {character.location.name}</StyledP>
      <StyledP>Species: {character.species}</StyledP>
      <StyledP>Status:{character.status}</StyledP>
    </StyledDiv>
  );
}

const StyledDiv = Styled.div`
    background-color: '#17163e',
`;
const StyledH2 = Styled.h2`
  color: #07acc4,
  font-weight:700,
`;
const StyledP = Styled.p`
color: 'rgb(32,169,172)',
  text-align: left;
`;
