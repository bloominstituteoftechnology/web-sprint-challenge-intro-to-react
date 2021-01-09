import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [characterData, setCharacterData] = useState({});
  
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacterData(res.data);
        console.log("fetch data: ", res.data); //We're setting the resolution to data, because that is the property you want from the API that will give me the list of characters.
        //Then you will set the res.data to setCharacterData, setting the data to state so we can use it.
      })
      .catch(err => console.log(err));
      
  }, []); 
  console.log("Data: ", characterData);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
