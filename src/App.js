import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import Character from "./components/Character"



const App = () => {
  const [names, setNames] = useState([]);
  const [characterId, setCharacterId] = useState("")

  const openDetails = id => {
    setCharacterId(id)
  }

  const closeDetails = () => {
    setCharacterId(null)
  }

  useEffect(() => {
    const getChar = () => {
      axios.get(`https://swapi.dev/`)
      .then(res => {
        setNames(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err)
      })
    }
    getChar()
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {
        names.map(na => {
          return <Character bold key={na.id} info={na} action={openDetails} />
        })
      }
      {
        <Character charId={characterId} close={closeDetails} />
      }

    </div>
  );
}

export default App;
