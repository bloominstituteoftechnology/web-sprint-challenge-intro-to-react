import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([])

useEffect (() => {
  axios.get('http://swapi.dev/api/people/')
    .then(res => {
      console.log(res)
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
}, []);

  return (
    <div className="App">
      <h1 className="Header"> ===S#T#%ar wa%^R$S+++ </h1>
      <h2 className="subHeader">CHARACTERS</h2>
      <div className="characterContainer">
          { characters.map((data, index) => {
            return <Character key={index} characterData= {data}/>
            })
          }
      </div>
    </div>
  );
}
export default App; 


