// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
// import Bio from './components/Bio'
import styled from 'styled-components'

const StyledApp = styled.div`
    h1 {
    display: flex;
    flex-direction: flex-start;
    margin: 40px;
    color: white;
    }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const [charData, setCharData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setCharData(res.data);
    })
    .catch(err => {
      debugger
    })
  }, [])

  return (
    <StyledApp>
      <h1 className="Header">Star Wars Characters</h1>      
      {
        charData.map(cr => {
          return <Character 
            className="Character"
            key={cr.id}
            info={cr}
          />
        })
      }
    </StyledApp>
  );
}

export default App;
