import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";
import "./App.css";

const H1 = styled.h1`
  font-size: 70px;
  display: flex;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [char, setChar] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setChar(response.data.results);
      })
      .catch((error) => {
        console.log("The data was not returned", error);
      });
  }, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <H1 className="Header">Characters</H1>
      <Character characters={char} />
    </div>
  );
};

export default App;
