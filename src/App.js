import React, { useState } from "react";
import CharacterList from "./components/CharacterList.js";
import CharacterForm from "./components//CharacterForm.js";
import "./App.css";

const App = () => {
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [characterPost, setCharacterPost] = [];

  const getData = () => {
    console.log("btn");
  };

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterForm name={"app"} getData={getData} />
      <CharacterList name={"app"} />
    </div>
  );
};

export default App;
