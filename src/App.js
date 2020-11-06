import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


const App = () => {
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    const fetchPoke = () => {
      axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => {
          console.log(res.data);
          setPokeData(res.data);
        })
        .catch(err => {

        });
    };
    fetchPoke();
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h2>{pokeData.name}</h2>
      <p>{pokeData.height}</p>

    </div>
  );
}

export default App;
