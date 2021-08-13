import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';

import Character from './components/Character';

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null);

  const StyledHeader = styled.div`
    margin: 50px;
    text-align: center;
  `

  const StyledDetails = styled.div`
  margin: 50px;
`

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        setError(`We're experiencing technical difficulties, please try again...`)
      })
  }, [])

  return (
    <>
      <StyledHeader>
        { error && <h1>{error}</h1> }
        { <h1>Star Wars Characters</h1>}
      </StyledHeader>
      <StyledDetails>
      { data.map((char, index) => {
        return <Character info={char} key={index} />
        }) 
      }
      </StyledDetails>
    </>      
  );
}

export default App;
