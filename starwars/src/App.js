import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; 
import StarshipComponent from './components/Starships.js'
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const LargeHeader = styled.h1`
  color: #33FF38;
  font-size: 64px;
  margin: 30px;
  font-weight: bold;
  
`;

const BackgroundDiv = styled.div` 
  background-color: grey;
  `;



  const [starships, setChar] = useState([]);
  useEffect(() => {
    axios
      .get('http https://swapi.dev/api/starships')
      .then(response => {
        console.log(response)
        setChar(response.data.results)
      })
      .catch(error => console.log('Error', error));
  }, []);
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <BackgroundDiv>
    <div className="App">
      <LargeHeader className="Header">Starships</LargeHeader>
        {starships.map(starships => (
          <StarshipComponent key={starships.id} starships={starships} />
        ))}
    </div>
    </BackgroundDiv>
  );
}

export default App;