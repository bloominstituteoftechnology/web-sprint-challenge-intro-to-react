import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';

import styled from 'styled-components';

const CharactersDiv = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 50%;
`

const App = () => {
  const [charactersInfo, setCharactersInfo] = useState(null);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        setCharactersInfo(res.data);
      })
      .catch(err => {
        console.log('Please note this error:\n', err);
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharactersDiv>
        {
          charactersInfo && 
          <>
            {
              charactersInfo.map((character, index) => {
                return <Character key={index} info={character}/>
              })
            }
          </>
        }
      </CharactersDiv>
    </div>
  );
}

export default App;
