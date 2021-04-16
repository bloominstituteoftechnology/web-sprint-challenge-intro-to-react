import React, {useEffect, useState } from 'react';
import Characters from './components/Characters';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

const Container = styled.div `
  margin: 10%;
`;

const Header = styled.h1 `
  color: #transparent;
  text-align: center;
  font-family: 'Teko', sans-serif;
  font-size: 8rem;
  text-shadow: -1px 0 yellow, 0 1px yellow, 1px 0 yellow, 0 -1px yellow;
`;

const App = () => {
  const [people, setPeople] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect( () => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res)
        setPeople(res.data.results)
      })
      .catch( error => console.log(error))
  }, [])

  return (
    <Container>
      <Header>Star Wars Characters</Header>
        {
          people.map( (char, i) => 
              <Characters key={i} starChars={char}/>)
        }
    </Container>
  );
}

export default App;