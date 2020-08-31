import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CharacterMap from './components/CharacterMap'
import './App.css';

const App = () => {

  const [data, setData] = useState([])
  useEffect(() => {


    axios.get('https://swapi.dev/api/people/')
      .then(function (response) {

        setData(response.data.results)


      })
      .catch(function (error) {
        console.log(error);
      });

  }, []);




  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterMap data={data} />
    </div>
  );
}

export default App;
