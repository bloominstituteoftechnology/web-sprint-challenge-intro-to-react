import axios from 'axios';
import React, { useEffect } from 'react';
import React, { useState } from 'react'
import './App.css';
import Character from './components/Character';

const App = () => {
  
  
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [URL] = useState("https://swapi.dev/api/people")
  const [char, setChar] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(()=>{
   axios.get(URL)
      .then((res) => {
        setChar(res.data.results)
      })
      .catch(errors => {return errors})
  },[])
  
  
  
  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
