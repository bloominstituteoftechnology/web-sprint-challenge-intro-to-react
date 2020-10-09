// Write your Character component here
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CharacterStyled = styled.div`
  background-color: white;
  color: black;
  width: 30%;
  text-align: center;
  border-radius: 15px;
  margin: 2%;
`;

const Character = (props) => {
  console.log("count", props.data);
  return props.data.map(function (item) {
    return (
      <CharacterStyled>
        <h2>Name: {item.name}</h2>
        <h2>Birth Year: {item.birth_year}</h2>
        <h2>Height:{item.height}</h2>
        <h2>Mass: {item.mass}</h2>
        <h2>Color: {item.hair_color}</h2>
        <h2>Skin: {item.skin_color}</h2>
      </CharacterStyled>
    );
  }, 0);
};
export default Character;
