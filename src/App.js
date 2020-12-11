import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Characters from './components/Characters'
import styled from 'styled-components'


//styles
const StyledApp = styled.div`
  display: block;
  height: 100vh;
  width: 100vw;
  background: url('images/stars.jpg');
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
`

const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <StyledApp className="App">
      <Characters characters={characters} />
    </StyledApp>
  );
}

export default App;
