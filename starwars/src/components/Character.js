// Write your Character component here
import React from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const Card = styled.div`
  background-color: #e9fae3;
  border: solid 1px grey;
  border-radius: 2%;
  width: 30%;
  margin: 2% 0;
  padding: 3%;
  box-shadow: 4px 4px black;
  color: black;
  h2 {
    color: #1e1b18;
  }
  h3.green {
    color: green;
  }
  h3.red {
    color: red;
  }
  h3.spieces {
    color: blue;
  }
`;

const StyledImg = styled.img`
  border: grey solid 2px;
  border-radius: 4%;
  max-width: 100%;
`;

const Cards = (props) => {
  const { data } = props;

  return (
    <div>
      {data.map((character) => {
        return (
          <StyledDiv>
            <Card>
              <h2>{character.name}</h2>
              <h3 className="green">Gender: {character.gender}</h3>
              <h3 className="red"> Status: {character.status}</h3>
              <h3 className="spieces"> Spieces: {character.species}</h3>

              <StyledImg src={character.image}></StyledImg>
            </Card>
          </StyledDiv>
        );
      })}
    </div>
  );
};

export default Cards;
