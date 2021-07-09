import React from 'react';
import axios form 'axios';
import { useState, useEffect } from 'react';
import Character from './components/Character'
import './App.css';


const App = () => {
  axios.get(`https://swapi.dev/api/people`)
  .then((data) => {
    setCharacters(data.data);
  })
  .catch(e => {console.log(e)})
  
}, [])

return {
  <div classnaem = "App">
    <h1 className = "Header">Characters</h1>
    <Character props = {characters} />
  </div>
);
}

export default App;
