import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import Details from './components/Details'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [characterId, setCharacterId] = useState('')
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const openDetails = id => {
    setCharacterId(id)
  }
  const closeDetails = () => {
    setCharacterId(null)
  }


useEffect (() => {
  axios.get(`http://swapi.dev/api/people`)
    .then(res => {
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(err)
    })
}, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <div className="characterContainer">
        <h2>Characters:</h2>
        {
          characters.data.map(ch => {
            return <Character key={ch.id} info={ch} action={openDetails}/>
          })
        }
        {
          characterId && <Details personId={characterId} close= {closeDetails}/>
        }
      </div>
    </div>
  );
}

export default App;
