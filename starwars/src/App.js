/** @format */

import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
//import styled from 'styled-components'
import Characters from "./components/Character";

const App = () => {
  const [characterData, setCharacterData] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/")
      .then((response) => {
        setCharacterData(response.data.results);
        console.log("Success", response.data.results);
      })
      .catch((error) => console.log("Failure", error));
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars API</h1>
      <ul>
        {characterData.map((characterData) => {
          return (
            <Characters
              key={
                characterData.name +
                characterData.birth_year +
                characterData.gender +
                characterData.eyecolor +
                characterData.mass +
                characterData.height
              }
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
