import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import CharacterPage from './components/CharacterPage';
const axios = require('axios').default;

const StyledButton = styled.button`
  background-color: black;
  color:white;
  border: 1px yellow solid;
`
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //<button onClick={() => setPage(page+1)}>Next page</button>
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people?page=${page}`)
    .then(res => {
      console.log(res.data);
      setCharacters(res.data);
    });
  }, [page])
  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <CharacterPage data={characters.results}/>
      {
        page > 1 &&
        <StyledButton onClick={() => setPage(page-1)}>Previous Page</StyledButton>
      }
      <StyledButton onClick={() => setPage(page+1)}>Next Page</StyledButton>
    </div>
  );
}

export default App;
