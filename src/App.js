import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from './components/Character';

const App = () => {
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res)
        setCharacterInfo(res.results)
      })
      .catch((err) => {
        console.log('error', err)
      })
    }, []);
    console.log(characterInfo)

    return (
        <div className="App">
          <h1 className="Header">Rick And Morty Characters!</h1>
          {characterInfo.map((character, index) => {
            return (<Character key={character.id}
            info={character} />
          )}
          )}
        </div>
        
    );
}


export default App;
