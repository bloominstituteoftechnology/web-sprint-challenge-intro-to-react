import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character";
import './App.css';

const StyledH1 = styled.h1`
font-family:'Henny Penny', cursive;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  useEffect(()=>{
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res =>{
      console.log(res.data.results);
      setCharacter(res.data.results);
    })
    .catch(err =>{
      console.log("Error occurred:", err);
    })
  })


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <StyledH1 className="Header">Characters</StyledH1>
      <Character  characterArray = {character}/>
    </div>
  );
}

export default App;
