import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';

const App = () => {
  const [charactersInfo, setCharactersInfo] = useState(null);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        setCharactersInfo(res.data);
      })
      .catch(err => {
        console.log('Please note this error:\n', err);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        charactersInfo && 
        <>
          {
            charactersInfo.map((character, index) => {
              return <Character key={index} info={character}/>
            })
          }
        </>
      }
    </div>
  );
}

export default App;
