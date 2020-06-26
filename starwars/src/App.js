import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  // const [ StarWarsData, setStarWarsData ] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people/')
      .then(res =>{
        console.log("Star Wars Data:",res)
      })
      .catch(err=> {
        console.log('Error:',err)
      })
  })

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
