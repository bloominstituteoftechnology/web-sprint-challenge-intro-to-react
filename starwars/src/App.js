import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'
import './App.css';

const Header = styled.h1`
border: 3px solid black;
padding: 1.5rem;
`

const App = () => {
  const [characters, setCharacters] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const SWapi = "https://swapi.dev/api/people/"

  useEffect(() => {
    axios.get(SWapi)
    .then((r) => {
      setCharacters(r.data.results)
      console.log(r.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Header className="Header">Characters</Header>
      <Character characters = {characters}/>
    </div>
  );
}

export default App;
