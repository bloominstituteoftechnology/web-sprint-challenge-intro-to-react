import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Characters from './components/Characters';
import styled from 'styled-components';
import backgroundImage from './images/stars.jpg';

//styles
const StyledApp = styled.div`
  background-color: ${pr => pr.theme.black};

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
