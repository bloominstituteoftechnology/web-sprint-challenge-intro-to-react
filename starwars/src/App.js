import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import CharacterList from "./components/Character";
const App = () => {
  const [chars, setChars] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
useEffect( () => {
  axios.get("https://swapi.py4e.com/api/people")
   .then(res => { console.log(res.data.results)
        setChars(res.data.results);
      })
      .catch(err => {
        console.log("Error occured in useEffect of MovieList: ", err);
      });

}, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {chars.map(char => { 
      return ( <CharacterList
            key={char.id}
            name={char.name}
            mass={char.mass}
            gender={char.gender}
            homeworld={char.homeworld}
      /> 
      );
      })}


      </div>
  );
}

export default App;
