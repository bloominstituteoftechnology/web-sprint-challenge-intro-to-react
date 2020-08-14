import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import CharacterInfo from './components/CharacterInfo'


const BASEURL = "https://swapi.py4e.com/api/people"

function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([])
  const [characterName, setCharacterName] = useState('1')
  
  const openBio = id => {
    setCharacterName(id)
  }
  const closeBio = () => {
    setCharacterName(null)
  }
  
  useEffect(() => {
    axios.get(`${BASEURL}`)
    .then(res => {
      setCharacterList(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])






  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characterList.map(cr => {
          return <Character key={cr.name} info= {cr} action={openBio} actionText ={cr.birth_year} />
        })
      }
      {
        characterName && <CharacterInfo characterName={characterName} close={closeBio} /> 
      }
    </div>
  );
}

export default App;
