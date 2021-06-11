import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details'
import Year from './components/Year'
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState([])
  const [currentCharacter, setCurrentCharacter] = useState(null)

  // const openDetails = idx => {
  //   setCurrentCharacter(idx)
  // }

  // const closeDetails = () => {
  //   setCurrentCharacter(null)
  // }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data)
      setCharacter(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">REACT WARS</h1>
      {
        character.map((char, idx) => {
          return <Character key={char.idx} info={char.name} year={char.birth_year} />
        })
      }
    </div>
  );
}

export default App;
