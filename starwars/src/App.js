import React from 'react';
import './App.css';
import CharacterData from './components/Character';
import styled from 'styled-components'

const Body = styled.body`
    
    align-items: center;
    box-sizing: border-box;
    background-size: auto;
    background-attachment: fixed;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Body>
      <h1 className="Header">Characters</h1>
      <CharacterData/>
    </Body>
  );
}

export default App;
