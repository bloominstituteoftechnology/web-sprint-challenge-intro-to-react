import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import {BASE_URL} from "./constants"
import Character from "./components/Character"
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      console.log(res.data);
      setCharacters(res.data);
    }).catch(err => console.log(err))
  }, [])
  console.log("outside use", characters)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        <Character className="Charcters" characters={characters}/>
    </div>
  );
}

export default App;
