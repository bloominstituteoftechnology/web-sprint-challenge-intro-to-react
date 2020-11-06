import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';
import {BASE_URL} from './constants/constants';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [selectedChar, setSelectedChar] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const openDetails = (id) =>
  {
    setSelectedChar(id);
  }

  const closeDetails = () =>
  { 
    setSelectedChar(null);
  }

  useEffect(() => {
    axios.get(BASE_URL)
         .then(res => 
          { 
            const results = res.data.results;

            console.table(results);
            setCharacters(results);
          })
          .catch((err) => 
          {
            console.log(`Caught: ${err}`);
          })
    return () => {
      
    }
  }, [])

const Character = (props) => 
(
  <div className="character"> 
    {props.info.name}
    <button onClick={() => 
    { 
      openDetails(props.info.name)
    }}>More Info</button>
  </div>
);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((character) => 
        { 
          return <Character key={character.name} info={character} />
        })
      }
  {selectedChar && (
    <Details charId={selectedChar} close={closeDetails} />
  )}
    </div>
  );
}

export default App;
