import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
`;

const StyledHeader = styled.h1`
  color: #fff;
  flex-basis: 260px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: 10px;
`;

const CharacterListWrapper = styled.div`
  flex: 1 1 auto;
  background-image: linear-gradient(rgba(17, 19, 29, 0), rgba(17, 19, 29, 1) 60%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  @media(max-width: 1600px) {
    flex-wrap: wrap;
  }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const fetchCharacters = () => {
  axios.get('https://swapi.dev/api/people')
  .then(response => {console.log(response.data); setCharacterList(response.data)})
}

useEffect(fetchCharacters, []);

  return (
    <StyledApp className="App">
      <StyledHeader className="Header">Characters</StyledHeader>
      <CharacterListWrapper>
        {
          characterList.map((character, index) => {
            return <Character character={character} key={index}></Character>
          })
        }
      </CharacterListWrapper>
    </StyledApp>
  );
}

export default App;
