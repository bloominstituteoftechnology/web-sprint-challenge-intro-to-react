import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Character } from "./components/Character";

const App = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/?page=2")
      .then((response) => setCharacters(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">REACT WARS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ></h1>
      <Character data={characters} />
    </div>
  );
};

export default App;
