import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]); 
  // will probably need character/setCharacter state 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      // console.log(res.data.results);
      setCharacters(res.data.results);
    })
    .catch(err => {
      console.log('There was an error, message:' + err);
    })
  }, []); 
console.log(characters)

  return (
    <div className="App">
      <h1 className="Header">Eisleygram</h1>
        {characters.map(character => {
          return ( 
          <Character key={character.created}
          name={character.name}
          gender={character.gender}
          birthday={character.birth_year}
          hairColor={character.hair_color}
          eyeColor={character.eye_color}
          mass={character.mass}
          rides={character.starships.length + character.vehicles.length} />
          )
        })}

    </div>
  );
}

export default App;
