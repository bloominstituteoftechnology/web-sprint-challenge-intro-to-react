import React, { useState, useEffect} from "react";
import './App.css';
import Character from "./components/Character";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/")
    .then((res) => {
      console.log("res.data, res.data.results");
      SetDataElement(res.data.results);
    })
    .catch((err) => console.log("There was an error found", err));
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App" style={{display: "flex", flexwrap: "wrap", justifyContent: "space-evenly"}}>
      <div style={{width: "100%"}}></div>
      <h1 style={{textAlign: "center", color: "#44D540"}}>Rick and Morty Index </h1>
    </div>
    {character.map((char, index) => {
      return <Character key={index} character={char} />;
    })}
  

export default App;
