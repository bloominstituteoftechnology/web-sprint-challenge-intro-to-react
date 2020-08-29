import React from "react";
import styled from "styled-components";
import { Card } from "../styled-components/Card";

const CharacterCard = ({ char }) => {
  return (
    <Card>
      <h2>{char.name}</h2>
      <p>Status: {char.status}</p>
      <p>Gender: {char.gender}</p>
      <p>Species: {char.species}</p>
    </Card>
  );
};

export default CharacterCard;
