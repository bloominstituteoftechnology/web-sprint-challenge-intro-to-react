import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./components/CharacterList.js";
import Styled from "styled-components";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setCharacters(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        debugger;
      });
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <StyledH1 className="Header">Rick and Morty</StyledH1>
      <CharacterList characters={characters} />
    </div>
  );
}
const StyledH1 = Styled.h1`
  color: #07acc4,
  font-weight:700,
`;

export default App;
