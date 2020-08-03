import React from 'react';
import './App.css';
import Characters from './components/Character'
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono');
  body {
    font-family: 'Roboto Mono', monospace;
  }
`



const App = () => {

  const Header = styled.a`
  
    display: flex;
    justify-content: center;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 20rem;
    background: ghostwhite;
    color: cyan;
    border: 2px solid black;
    `
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <GlobalStyles />
      <Header className="Header">Characters</Header>
      <p className="text2"><Characters /></p>
     
    </div>
  );
}

export default App;
