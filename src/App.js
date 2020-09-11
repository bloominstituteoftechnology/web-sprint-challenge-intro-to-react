import React, { useState, useEffect } from "react";
import Character from "./components/Character";
// import Character from "./components/Character";
import axios from "axios";
// import styled from "styled-components";
import "./App.css";

const App = () => {
  const [character, setCharacter] = useState([]);
  const URL = `https://swapi.dev/`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        console.log("response", res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character character={"character info"} />
    </div>
  );
};

export default App;
