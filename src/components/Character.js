// Write your Character component here
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  justify-content: space-evenly;
  margin-top: 30px;
  align-items: center;
  padding: 20px;
  background-color: gold;
  color: black;
  margin: 5%;
  border-radius: 6px;
`;

const Button = styled.button`
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5%;
    textAlign: "center";
    width: 100%;
`


const Character = ({ character }) => {
  console.log("poke props", character);
  return (
      <Card>
        <h2 style={{textAlign: "center", fontSize: 30, width: "100%"}}>Name: {character.name} </h2>
        <br/>
        <Button onClick={()=> {window.open(character.url)}}>Learn More</Button>
      </Card>
      
  );
};

export default Character;
