import React from "react";
import styled from "styled-components";
import { Card } from "../styled-components/Card";

const Name = styled.h2`
  color: #fff;
`;

const Status = styled.h2`
  color: #fff;
`;

const CharacterCard = ({ char }) => {
  return (
    <Card>
      <div>
        <img src={char.image}></img>
      </div>

      <div>
        <Name>{char.name}</Name>
        <Status>
          {char.status} - {char.species}
        </Status>
        <p>Gender: {char.gender}</p>
      </div>
    </Card>
  );
};

export default CharacterCard;
