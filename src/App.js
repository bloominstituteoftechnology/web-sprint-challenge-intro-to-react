import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import {BASE_URL} from "./constants"
import Character from "./components/Character"
import styled from 'styled-components'
import images from './images/ewok.jpg'

const StyledBackground = styled.div`
  background-image: url(${images});
  background-size: cover;
  padding: 50px;
`

const StyledHeader = styled.h1`
  font-size: 4em;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}`)
    .then(res => {
      //console.log(res.data);
      setCharacters(res.data);
    }).catch(err => console.log(err))
  }, [])
  //console.log(characters)
  return (
    <StyledBackground className="App">
      <StyledHeader className="Header">Characters</StyledHeader>
        <Character className="Charcters" characters={characters}/>
    </StyledBackground>
  );
}

export default App;
