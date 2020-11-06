import React, { useEffect, useState } from 'react';
import Character from './components/Character';
import axios from 'axios';
import './App.css';


  

const App = () => {
  
  const [characterInfo, setCharacterInfo] = useState([]);
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/?')
    .then((res) => {
      setCharacterInfo(res.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        {
        characterInfo.map(ch => {
          return <Character key={ch.id} info={ch} />
        })
        }
    </div>
  );
}

export default App;
