import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Character from './components/Character';

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {
        setError(`We're experiencing technical difficulties, please try again...`)
      })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <>
      <div className="App">
        { error && <h1>{error}</h1> }
        { <h1>Characters</h1>}
      </div>
      <div>
      { data.map(char => {
        return <Character info={char} />
        }) 
      }
      </div>
    </>      
  );
}

export default App;
