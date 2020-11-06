import React, {useEffect, useState} from 'react';
import './App.css';
import Filters from './components/Filters'
import Characters from './components/Characters'
import Character from './components/Character'

const axios = require('axios').default;

const App = () => {
  const [characterOfInterest, setCharacterOfInterest] = useState('rick');
  const [variations, setVariations] = useState();
  const [variationImage, setVariationImage] = useState('');
  const [variationName, setVariationName] = useState('');

  //Define where the endpoint to go fetch from is, filter by alive to avoid dead characters
  const endPointAlive = `https://rickandmortyapi.com/api/character/?name=${characterOfInterest}&status=alive`


  //Set state of character of interest to Rick helper for button
  const showRick = () => {
    setCharacterOfInterest('rick');
  }
  
  //Set state of character of interest helper to Morty helper for button
  const showMorty = () => {
    setCharacterOfInterest('morty');
  }

  //Set state of which variations to render
  useEffect(() => {
    axios
    .get (`https://rickandmortyapi.com/api/character/?name=${characterOfInterest}&status=alive`)
    .then(res => {
      setVariations(res.data.results)
      })}, [characterOfInterest]);

  
  // const collectVariations = () => {
  //   axios.get(endPointAlive)
  //   .then(res => {
  //     setVariations (res.data.results);
  //   })
  //   }
  
    console.log(variations);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Tracker</h1>
      <Filters showRick = {showRick} showMorty = {showMorty} />
      <br></br>
      <Characters variations={variations}/>
      <Character />
    </div>
  );
}

export default App;

  //Grab all alive ricks or mortys in an iterable array
  // const grab = () => {
  //   setPersons(
  //   //Go get the data from the API endpoint that has all alive characters not just rick and morty 
  //   axios.get(endPointAlive)
  //   //Get what is relevant to the current state only and return it in an array of character objects
  //     .then ((res) => {
  //       //Test
  //       let stagingArr = [];
  //       //Push the right characters into a staging array of objets
  //       res.results.forEach((character) => {
  //         if (character.name.contains(person)){
  //         stagingArr.push(character) 
  //         } 
  //       })
  //       stagingArr.forEach((characterObj) => {
  //         for (const property in characterObj) {
  //           setCharacterName (characterObj.name)
  //           setImageUrl (characterObj.image)
  //         }
  //       })
  //     })
  // )}