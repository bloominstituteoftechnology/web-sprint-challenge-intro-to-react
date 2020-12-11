import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';

const App = () => {
  //If you are expecting an array, make sure to use an empty array for your beginning state
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      // console.log(res.data)
      setCharacters(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  // console.log(characters);

  return (
    <>
    <Header />
    <Cards characters={characters} />
    </>
  );
}

export default App;
