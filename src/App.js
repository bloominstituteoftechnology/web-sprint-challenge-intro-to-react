import React, { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import Character from "./Character"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [ swData, setSwData ] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(response => setSwData(response.data.results))
    .catch(error => console.log("something went wrong: ", error));
  }, []);

  console.log(swData);


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        swData.map((data, index) =>{
          return <Character key = {index} characterData = {data} />
        })
      }
    </div>
  );
}

export default App;
