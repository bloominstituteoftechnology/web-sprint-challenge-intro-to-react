import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharacterContainer from "./components/Character.js";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

const App = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const data = axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
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
      <h1 className="Header">Characters</h1>
      {characters.map((character) => {
        return (
          <CharacterContainer
            key={character.id}
            name={character.name} 
            status={character.status}
            species={character.species}
            gender={character.gender}
          />
        );
      })}
    </div>
    
  );
};

export default App;
