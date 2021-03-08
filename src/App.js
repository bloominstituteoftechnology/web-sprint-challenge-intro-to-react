import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterContainer from "./components/Character.js";
import styled from "styled-components";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const data = axios
      .get("https://swapi.dev/api/people/?")
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>

      {characters.map((character) => {
        return (
          <CharacterContainer
            key={character.id}
            name={character.name}
            mass={character.mass}
            birthyear={character.birthyear}
            gender={character.gender}
          />
        );
      })}
    </div>
  );
};

export default App;
