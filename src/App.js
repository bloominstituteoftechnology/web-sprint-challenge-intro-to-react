import './App.css';
import axios from "axios"
import React, { useState, useEffect } from "react";
import Character from "./components/Character"



const App = () => {
  const  [ character, setCharacter ] = useState([])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(info => {
      console.log(info)
      setCharacter(info.data)
    })

  }, [])


  

  return (
    <div className="App">
      <h1 className="Header">Star WAR</h1>
      {characters.map((char, i) => {
        return <Charater key={i} char={char} />;
      })}
    </div>
  );
  }

export default App;
