import React, { useEffect, useState } from 'react';
import Character from './components/Character';
import Details from './components/Details';
import axios from 'axios';
import './App.css';


  

const App = () => {
  
  const [characterInfo, setCharacterInfo] = useState([]);
  const [currentCharId, setCurrentChar] = useState('1');

  const openDetails = id => {
    setCurrentChar(id)
  }
 
  const closeDetails = () => {
    setCurrentChar(null)
  }

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
          return <Character key={ch.id} info={ch} action={openDetails} />
        })
      }
      {
        currentCharId && <Details friendId={currentCharId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
