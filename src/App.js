import React from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const StyledApp = styled.div`
    background-color: black;
    
    h1{
      color: white;
      font-size: 4rem;
      padding: 10% 0 3% 0;
    }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className="App">
      <h1 className="Header">Imperial Galactic Database</h1>
      <Character />    
    </StyledApp>
  );
}

export default App;
