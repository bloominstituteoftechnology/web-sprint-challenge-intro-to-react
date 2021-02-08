import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character';
import axios from 'axios';

const StyledList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
      console.log(response);
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log('Something went wrong', error);
    })
  }, [])


  return (
    <div className="App">
      <img src='https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'></img>
      <h1 className="Header">Character List!</h1>
      <StyledList>
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </StyledList>
    </div>
  );
}
export default App;
