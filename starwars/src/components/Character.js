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
  width: 40%;
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
  button {
    margin-top: 5%;
    padding: 2%;
    color: white;
    background-color: black;
    border-radius: 4px;
    cursor: pointer;
  }
  button:not(:last-child) {
    margin-right: 100px;
  }
`;

const StyledImg = styled.img`
  border: grey solid 2px;
  border-radius: 4%;
  max-width: 100%;
`;

const Cards = (props) => {
  const { data, imageIndex, setImageIndex } = props;
  const character = data[imageIndex];

  return (
    <StyledDiv>
      <Card>
        <h2>{character.name ? character.name : "Unknown"}</h2>
        <h3 className="green">Gender: {character.gender}</h3>
        <h3 className="red"> Status: {character.status}</h3>
        <h3 className="spieces"> Spieces: {character.species}</h3>

        <StyledImg src={character.image}></StyledImg>
        {imageIndex === 0 ? null : ( // when imageIndex is 0 you can't do previouw
          <button
            className="button"
            onClick={() => {
              if (imageIndex > 0) {
                setImageIndex(imageIndex - 1);
              }
            }}
          >
            Previous Image
          </button>
        )}
        {imageIndex < data.length - 1 ? ( // when imageIndex is 19 the nextimage wont show up.
          <button
            className="button"
            onClick={() => {
              if (imageIndex < data.length - 1) {
                setImageIndex(imageIndex + 1);
              }
            }}
            disabled={imageIndex === data.length - 1}
          >
            Next Image
          </button>
        ) : null}
      </Card>
    </StyledDiv>
  );
};

export default Cards;
