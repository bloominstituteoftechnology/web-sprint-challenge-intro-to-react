import React, {useState} from 'react';
import './App.css';
import TotalsBar from './components/TotalsBar'
import Filters from './components/Filters'
import Characters from './components/Characters'
import Character from './components/Character'

const axios = require('axios').default;

const App = () => {
  const [person, setPerson] = useState('');
  const alivePersons = [];
  
  const stagingArr = [];
      

  //Define where the endpoint to go fetch from is, filter by alive to avoid dead characters
  const endPointAlive = 'https://rickandmortyapi.com/api/character/?status=alive'
  

  //Grab all alive ricks or mortys in an iterable array
  const grabAliveRicksOrMortys = () => {
    axios.get(endPointAlive)
    //Go to the endpoint that has all alive characters
    .then (res => {
      //Push the right characters into an array
      
      res.results.map((character) => {
        if (character.name.contains('Morty')){
         stagingArr.push(character) 
      }
      return character
    })
    })
  }

  console.log(stagingArr)
  console.log(alivePersons)
  //Set character to Rick helper for button
  const showRick = () => {
    setPerson('Rick');

  }
  
  //Set character to Morty helper for button
  const showMorty = () => {
    setPerson('Morty');
  }

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Tracker</h1>
      <TotalsBar />
      <Filters />
      <Characters />
      <Character />
    </div>
  );
}

export default App;
