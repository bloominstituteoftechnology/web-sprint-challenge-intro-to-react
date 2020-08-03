import React, {useEffect, useState} from 'react';
import './App.css';
import Characters from './components/Character'
import Starships from './components/starships'
import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono');
  body {
    font-family: 'Roboto Mono', monospace;
  }
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <GlobalStyles />
      <h1 className="Header">Characters</h1>
      <p className="text2"><Characters /></p>
      <img src={<Starships/>}/>
    </div>
  );
}

export default App;
