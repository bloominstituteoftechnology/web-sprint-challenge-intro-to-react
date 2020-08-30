import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

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
      <h1 className="Header">Characters</h1>
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
