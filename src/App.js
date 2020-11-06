import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState();
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() =>{
    axios
    .get('https://swapi.dev/api/people/')
    .then((res) =>{
      // console.log(res.data.results);
        // for(let i = 0; i <=10; i++){
        // setCharacter(res.data.results[i]);
        // }
        setCharacters(res.data.results)
    })
    .catch((err) =>{
      console.log(err, 'error');
    })
  }, [])



  const Page = styled.div`
  dislpay: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  `

  return (
    <Page className="App">
      <h1 className="Header">Characters</h1>
      {characters && characters.map(character => {
        return <Character key={characters.id} character={character}  />
      })}
    </Page>
  );
}

export default App;
