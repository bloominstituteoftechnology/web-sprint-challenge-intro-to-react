import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <h1 className="Header">StarWars Characters</h1>

      {chars.map(char => { 
      return ( <Character
            key={char.id}
            name={char.name}
            mass={char.mass}
            gender={char.gender}
            height={char.height}
            skincolor={char.skin_color}
            homeworld={char.homeworld}
            birth={char.birth_year}
      /> 
        );

      })}

  </div>
  );
}

export default App;
