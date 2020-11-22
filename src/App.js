import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import Character from "../src/components/Character"
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [state , setState] = useState({});
  useEffect( ()=> {
  
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
        setState(res.data.results)
      
      })
    .catch( err => err);
    },[]) 
   

let charProp = Array.from(state);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {charProp.map((character) => 
        (<Character character = {character} />))
      }
    </div>
  );
}

export default App;
