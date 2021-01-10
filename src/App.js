import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const [character, setCharacter] = useState([]) 
  
  useEffect( () => {
    axios   
        .get('https://rickandmortyapi.com/api/character')
        .then(success => {
            console.log('success', success);
            setCharacter(success.data.results);
            
        })

        .catch(fail => console.log('get fail', fail));

    },[])

  const StyledH1 = styled.h1`
    margin: 0 auto;
    margin-bottom: 50px;
    font-size: 100px;
    font-family: sans serif;
    background-color: #00ffd7;
    color: black;
    
    `

  return (
    <div className="App">
      <StyledH1 className="Header">Rick and Morty Characters</StyledH1>
      
      {character.map((char) => (
      <Character key={char.id} character={char} />
      ))}
    </div>
  )}

  
      

export default App;
