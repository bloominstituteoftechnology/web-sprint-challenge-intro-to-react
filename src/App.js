import React, { useState } from 'react';
import Character from "./components/Character"
import './App.css';
import Axios from 'axios';

const App = () => {
  const [baseUrl] = useState("https://rickandmortyapi.com/api/character/")
 
  const [characters, setCharacters] = useState([
    {
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      name: "Abandango Cluster"
    }
  ])

  useState(() => {
   
    Axios.get(baseUrl)
    .then((info) => {
      console.log(info)
      setCharacters(info.data.results)
    })
    .catch((err) =>{
      console.log("there is an error", err)
    })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Rick and Morty Characters</h1>
  
      {
        characters.map((character, index) => (
          <Character key= {`app-character-map-${index}`} character={character} />
        ))
        }

    </div>
  );
}

export default App;
