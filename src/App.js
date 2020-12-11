import React, {useState, useEffect}from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import styled from 'styled-components'

const HeadCharacterTitle = styled.h1`
        color: darkgreen;
        text-shadow: 1px 1px 6px #111;
        font-size:10rem;
        text-decoration: underline;
`

const App = () => {
  const [character, setCharacter] = useState ([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      console.log(response.data.results)
      setCharacter(response.data.results)
    })
      .catch(error => console.log(error))
  },[]);

  return (
    <div className="App">
      <HeaderComponent/>
      
      <HeadCharacterTitle className="Header">Characters</HeadCharacterTitle>
      {character.map(item  => 
            <Character eachCharacter = {item} key = {item.id}/>
      )}
      <FooterComponent/>
    </div>

  );
    
}

export default App;

