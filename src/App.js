import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersInfo, setCharactersInfo] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        setCharactersInfo(res.data.results);
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
        </>
      }
    </div>
  );
}

export default App;
