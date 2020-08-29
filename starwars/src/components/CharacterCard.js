import React from "react";
import styled from "styled-components";
import { Card } from "../styled-components/Card";

const Name = styled.h2`
  color: #fff;
`;

const Status = styled.h3`
  color: #fff;
`;

const Origin = styled.p`
  color: #fff;
`;

const Link = styled.a`
  color: #03f9c2;
  text-decoration: none;
  font-weight: bold;
  text-shadow: 1px 1px 5px #443e3e;
`;

const CharacterCard = ({ char }) => {
  return (
    <Card>
      <div>
        <img src={char.image} className="Image"></img>
      </div>

      <div>
        <Name className="Name">{char.name}</Name>
        <Status>
          {char.status} - {char.species}
        </Status>
        <Origin>
          Origin: <Link href={char.origin.url}>{char.origin.name}</Link>
        </Origin>
      </div>
    </Card>
  );
};

export default CharacterCard;
