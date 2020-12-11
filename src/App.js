import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components'
import './App.css';


const App = () => {
  const [characterInfo, setCharacterInfo] = useState([]);
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      setCharacterInfo(response.data.results);
    })
    .catch((error) => {
      console.log(error);
      debugger
    })
  }, [])

  return (
    <div className="App">
      <h1>CHARACTERS</h1>
      {
        characterInfo.map(character => {
          return <Character key={character.id} data={character} />
        })
      }
    </div>
  );
}
export default App;