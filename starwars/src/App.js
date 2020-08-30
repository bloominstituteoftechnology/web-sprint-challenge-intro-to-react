import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; 
import PlanetsComponent from './components/Starships.js'
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
 max-width: 100%;
 display: flex;
 justify-content: center;
  `;



  const [planets, setChar] = useState([]);
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/planets')
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
      <LargeHeader className="Header">Planets</LargeHeader>
          {planets.map((planets) => <PlanetsComponent 
          key={planets.id} 
          
          name={planets.name}
          rotation_period={planets.rotation_period}
          gravity={planets.gravity}
          population={planets.population}
          terrain={planets.terrain}
          />)}
        
    </div>
    </BackgroundDiv>
  );
}

export default App;