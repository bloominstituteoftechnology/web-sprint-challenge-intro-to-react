import React, { useState, useEffect } from 'react';
import axios from "axios";
import Character from "./components/Character";
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")

    .then((response) => {
      console.log(response);
      setCharacterList(response.data);
    })

    .catch((err) => console.log(err))
  },[]) //Setting this to empty because it will run on initial render, and any re-renderings of the DOM 

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {!characterList ? <h2>Loading...</h2> : characterList.map((character, index) => <Character key={index} character={character}/>)}
    </div>
  );
}

export default App;
