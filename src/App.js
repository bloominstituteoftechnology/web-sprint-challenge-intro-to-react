import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import Character from './components/Character'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/')
    .then((res) => {
      setCharacters(res.data.results)
    })
    .catch((error) => {
      alert(error)
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      <h1 className="Header">Characters</h1>
      <div className="top">
        
      {
        characters.map((character) => {
          return <Character key={character.name} character={character} />
        })
      }
      </div>
      
    </div>
  );
}

export default App;

 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.