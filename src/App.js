import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
//import './App.css';

const StyledH1 = styled.h1`
  text-align: center;
  font-family: franklin gothic;
  color: gold;
  font-size: 50px;
`;

const StyledAppDiv = styled.div`
    background-color: black;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people')
    .then(res => {
      console.log(res.data.results)
      setCharacters(res.data.results)})
    .catch(err => console.log(err));
  }, [])
  return (
    <StyledAppDiv className="App">
      <StyledH1 className="Header">React Wars</StyledH1>
      <Character characters={characters}/>
    </StyledAppDiv>
  );
}

export default App;
