import React from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character.jsx'
import styled from 'styled-components'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = React.useState([])
React.useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character/').then(res => {
    console.log(res)
    setCharacters(res.data.results)
  })
}, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Container>
      {characters.map(character => {
        return <Character character = {character}/>
      })}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`


export default App;
