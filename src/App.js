import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  const [starwarsCharacter, setstarwarsCharacter] = useState([])

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setstarwarsCharacter(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  console.table(starwarsCharacter)
  const Character = starwarsCharacter.map(inner => inner.name + inner.height + inner.mass + inner.hair_color + inner.skin_color)

  console.log(Character)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {Character}


    </div>
  );
}

export default App;


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

