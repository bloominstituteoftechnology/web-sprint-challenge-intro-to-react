import React from "react";
import CharacterCard from "./CharacterCard.js";
import Styled from "styled-components";

function CharacterList(props) {
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
  color: '#d6e8ad';
  /* background-color: 'black'; */
  text-align: center;
`;

export default CharacterList;
