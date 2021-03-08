import React from "react";
import styled from "styled-components";
// Write your Character component here
const character = ({ name, mass, gender, birthYear }) => {
  const StyleDiv = styled.div`
    color: red;
    font-weight: bold;
    font-size: 18px;
  `;

  const FirstName = styled.div`
    text-align: center;
    color: blue;
    font-weight: bold;
    border: black 5px dashed;
    font-size: 20px;
  `;

  return (
    <StyleDiv>
      <div className="Character-Container">
        <FirstName>
          <h1>{character}</h1>
          <p>{name}</p>
        </FirstName>
        <p>{mass}</p>
        <p>{birthYear}</p>
        <p>{gender}</p>
      </div>
    </StyleDiv>
  );
};

export default character;
