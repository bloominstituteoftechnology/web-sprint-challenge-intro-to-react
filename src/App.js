import React from "react";
import CharacterContainer from "./components/CharacterContainer";
import styled from "styled-components";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Title className="Header">Star Wars Characters</Title>
      <CharacterContainer />
    </div>
  );
}

const Title = styled.h1`
  font-size: 4rem;
  font-family: "Turret Road", cursive;
  color: red;
  -webkit-text-stroke: 2px black;
`;
