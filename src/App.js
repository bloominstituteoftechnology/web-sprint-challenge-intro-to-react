import React from 'react';
import React, { useEffect, useState } from 'react';
import Character from './components/Character';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/?')
    .then((res) => {
      setCharacterInfo(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h1 className="Header">Star Wars Peoples</h1>
        {
        characterInfo.map(ch => {
          return <Character key={ch.id} info={ch} />
        })
        }
    </div>
  );
}

export default App;