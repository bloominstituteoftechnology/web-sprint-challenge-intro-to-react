import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from "./components/Character";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const baseUrl = "https://swapi.dev/api/";
  const [people, setPeople] = useState()
  useEffect(() => {
    const getPeople = () => {
      axios.get(`${baseUrl}people/`)
        .then(response => response.data)
        .then(ApiData => setPeople(ApiData))
    }
    getPeople();
  }, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <ul>
        {people?.map((person, index) => <Character character={person} key={index} />)}
      </ul>
    </div>
  );
}

export default App;
