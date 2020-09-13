// Write your Character component here
import React from "react";
import cuid from "cuid";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(pr) => pr.theme.black};
  color: ${(pr) => pr.theme.white};
  padding: ${(pr) => pr.theme.paddingLarge};
  margin: ${(pr) => pr.theme.marginSmall} auto;
  border-radius: 10px;
  width: 80%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 3rem;
    text-align: center;
  }
  h2:hover {
    color: goldenrod;
  }
  p {
    line-height: 1.5;
  }
  p:hover {
    color: purple;
  }
`;

const Character = ({ characters }) => {
  // console.log("props", props.characters);
  return (
    <>
      {characters.map((character) => (
        <StyledDiv>
          <h2>NAME:{character.name}</h2>
          <p>
            Height:{character.height} Mass:{character.mass} Hair:
            {character.hair_color} Skin:{character.skin_color}
          </p>
        </StyledDiv>
      ))}
    </>
  );
};

export default Character;
