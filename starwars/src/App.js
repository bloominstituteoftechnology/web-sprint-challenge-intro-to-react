import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';
import logo from './images/pokemon_logo.png';


const Image = styled.img`
  width: 100px;
`;

const App = () => {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((res)=>{
        console.log('response ', res)
        setCharacters(res.data.results)
      })
      .catch((err)=>{
        console.log('error: ', err)
      })
  }, []);

  return (
    <div className="App">

      <h1 className="Header">Choose Your
        <br/>
        <span><Image src={logo} alt="pokemon logo"/></span>
      </h1>

      {characters.map((item) => {
        return(
          <Character
            name={item.name}
            url={item.url}
          />
        )
      })}
    </div>
  );
}

export default App;
