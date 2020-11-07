import React, {useEffect, useState} from 'react';
import './App.css';
import Filters from './components/Filters'
import Characters from './components/Characters'
import SiteTitle from './components/SiteTitle'
import OverallTracker from './components/OverallTracker'
// import Character from './components/Character'

const axios = require('axios').default;

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const App = () => {
  const [characterOfInterest, setCharacterOfInterest] = useState('');
  const [variations, setVariations] = useState([]);
  
  // const [variationImage, setVariationImage] = useState('');
  // const [variationName, setVariationName] = useState('');

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

  //Set state of character of interest helper to everyone to be used with button
  const showEveryone = () => {
    setCharacterOfInterest('');
  }

  //Set state of which variations, images and names to render
  useEffect(() => {
    axios
    .get (endPointAlive)
    .then(res => {
      setVariations(res.data.results)
      })}, [characterOfInterest]);

  //Loop through the results of the API to push urls to the image slice of state
  // for (const property in variations) {
    
  // }
  
  return (
    <div className="App">
      <SiteTitle siteTitle={'Rick and Morty Explorer'} />
      <Filters showRick = {showRick} showMorty = {showMorty} showEveryone={showEveryone}/>
      {/* <OverallTracker numberOfRicks={numberOfRicks} numberOfMortys={numberOfMortys} /> */}
      <br></br>
      <Characters variations={variations}/>
      {/* <Character /> */}
    </div>
  )
}

export default App;