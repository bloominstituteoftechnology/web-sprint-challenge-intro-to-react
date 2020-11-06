// Write your Character component here
import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  justify-content: space-evenly;
  margin-top: 30px;
  align-items: center;
  padding: 20px;
  background-image: linear-gradient(45deg, gold, whitesmoke);
  color: black;
  margin: 5%;
  border-radius: 6px;
  border: 1px solid gold;

  &:hover {
    border: 1px solid white;
  }
`;

const Button = styled.button`
  color: whitesmoke;
  background-color: black;
  border: 1px solid black;
  border-radius: 6px;
  padding: 5%;
  text-align: "center";
  width: 100%;

  &:hover {
    border: 1px solid white;
    background-color: rgb(45, 45, 45);
  }
`;

const Character = ({ character }) => {
  // console.log("poke props", character);
  return (
    <Cards>
      <h2 style={{ textAlign: "center", fontSize: 30, width: "100%" }}>
        Name: {character.name}{" "}
      </h2>
      <br />
      <Button
        onClick={() => {
          window.open(character.url);
        }}
      >
        {" "}
        Learn More
      </Button>
    </Cards>
  );
};

export default Character;
