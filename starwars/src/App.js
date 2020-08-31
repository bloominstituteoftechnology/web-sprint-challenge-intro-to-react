import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';
import logo from './images/pokemon_logo.png';

const Header = styled.h1`
  color: white;
  text-align: center;
  text-shadow: 10px 8px 20px #25262C;
  text-transform: uppercase;
`;

const Image = styled.img`
  width: 25%;
`;

const Wrapper = styled.div`
  background-color: #C6ECEE;
  width: 600px;
  margin: auto;
  border-radius: 125px;
  border: 20px solid #FDF8FC;
  box-shadow: 10px 10px 30px #888888;
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
    <Wrapper>

      <Header>Choose Your
        <br/>
        <span><Image src={logo} alt="pokemon logo"/></span>
      </Header>

      {characters.map((item) => {
        return(
          <Character
            name={item.name}
            url={item.url}
          />
        )
      })}
    </Wrapper>
  );
}

export default App;
