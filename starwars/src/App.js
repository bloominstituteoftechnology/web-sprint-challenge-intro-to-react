import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Characters from './components/Character';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
  axios
  .get ("https://swapi.dev/api/people/")
  .then(res => {
      console.log(res);
  setCharacters(res.data.results);
})
  .catch(error => {
      console.log("StarWars not Working Browswer has Covid-19", error);
});
},[])

      console.log(characters);

  return (
    <div className="App">
      <h1 className="Character">Characters</h1>
      <Characters />
    </div>
  );
}

export default App;
