import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import Characters from './components/Characters';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(response => {
        console.log(response);
        setCharacters(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledDiv>
        <Characters characters={characters} />
      </StyledDiv>
    </div>
  );
}

export default App;
