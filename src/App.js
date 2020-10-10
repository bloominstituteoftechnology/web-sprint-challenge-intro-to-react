import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const Cards = styled.div `
display:flex;
justify-content: space-evenly;
margin-top: 40px;
align-items: center;
padding: 10px;
background-color: rgba(255,255,255,.4);
color: black;

`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res)=>{
      console.log('res.data', res.data.results);
      setCharacter(res.data.results);
    })
    .catch((err)=> 
    console.log('error',err));
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Cards className="App" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
    <div style={{width: "100%"}}>
      <h1 style={{textAlign: "center", color: "white"}}>Pokemon Characters</h1>
    </div>
    {character.map((char, index) => {
      return <Character key={index} character={char} />;
    })}
  </Cards>
);
};
export default App;
