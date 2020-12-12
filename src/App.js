import React, { useState, useEffect } from 'react'
import './App.css';

import { BASE_URL} from './components/index';

import axios from 'axios'
import Details from './components/Details'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setcharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState('1')

  const openDetails = id => {
    setCurrentCharacterId(id)
  }

  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        console.log(res.data)
        setcharacters(res.data.results)
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
          return <Character key={char.id} info={char} action={openDetails} />
        }) 
      }
      {
        currentCharacterId && <Details friendId={currentCharacterId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
