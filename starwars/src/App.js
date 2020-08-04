import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import CardInfo from './components/Character'
import Character from './components/Character';


const App = () => {
  // Try to thinanek through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [charactersInfo, setCharactersData] = useState ([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {

    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      console.log(response);
      setCharactersData(response.data.results)
    })
    .catch(err => {
      console.log(err.status, err.data)
    })
  }, []);


  return (
    <div className="App">
      <h1 className="Header"> API StarWars</h1>
      {charactersInfo.map(character => {
        return (
        <Character
        name={character.name}
        height={character.height}
        mass={character.mass}
        gender={character.gender}
        />
        )
      })}
      <CardInfo/>
  
    </div>
  );
}

export default App;
