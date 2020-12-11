// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function Character(props) {
  console.log(props.character);
  return (
    <CharacterDiv className="character">
      <h2>{props.character.name}</h2>
      <h2>{props.character.birth_year}</h2>
  <span>{`Height: ${props.character.height} Weight: ${props.character.mass}`}</span>
    </CharacterDiv>
  );
}

const CharacterDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  border: #443e3e solid;
  margin: 1%;
  background-color:rgb(68, 62, 62, .5);
  color:#FFE81F;

  span {
    visibility: hidden;
    width: 220px;
    background-color: #443e3e;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    left:45%;
  }

  :hover {
    span {
      visibility: visible;
    }
    background-color:rgb(68, 62, 62, .8);
  }
`;
