import React from "react";
import CharacterCard from "./components/CharacterCard.js";
import Styled from "styled-components";

export default function CharacterList(props) {
  const { characters } = props;

  return (
    <StyledDiv>
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </StyledDiv>
  );
}
const StyledDiv = Styled.div`
  color: '#d6e8ad',
  background-color: '#17163e',
  text-align: left;
`;
