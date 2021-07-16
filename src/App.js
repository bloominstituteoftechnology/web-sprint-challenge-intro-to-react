import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import Character from './components/Character';
import { API_KEY } from './components/Key';

const App = () => {
  const [names, setNames] =useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=> {
    const fetchChracterData = () => {
      axios.get(`${API_KEY}`)
      .then(res => {
        setNames(res.data);
      })
      .catch(err => {
        debugger
      });
    }
    fetchChracterData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
