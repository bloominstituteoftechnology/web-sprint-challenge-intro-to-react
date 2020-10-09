import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';


const App = () => {
 
  const [characters, setCharacters] = useState([])
 
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacters(res.data.results) 
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  
  

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map(char => {
          return <Character key={char} charNames={char} mass={char.mass} height={char.height} hair={char.hair_color} eyes={char.eye_color} />
        })
      }
    </div>
  );
}

export default App;
