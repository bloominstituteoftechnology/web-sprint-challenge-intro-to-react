import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import styled from 'styled-components'
import Character from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charactersList, setCharactersList] = useState([])


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {

const fetchCharacters = () => {
  axios.get('https://rickandmortyapi.com/api/character')
  .then(res => {
    setCharactersList(res.data.results)
  })
  .catch(err => console.log(err))
}
fetchCharacters()


}, [])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characterList={charactersList}/>
    </div>
  );
}

export default App;
