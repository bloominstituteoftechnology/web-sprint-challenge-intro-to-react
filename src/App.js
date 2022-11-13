import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Dropdown from "./components/Dropdown"


const App = () => {
  const [characters, setCharacters] = useState()
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => setCharacters(res.data))
      .catch(err => console.err(err))
  },[])

  // console.log(characters)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Dropdown characters={characters}/>
    </div>
  );
}

export default App;
