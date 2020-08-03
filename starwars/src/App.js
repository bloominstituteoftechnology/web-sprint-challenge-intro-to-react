import React, { useState, useEffect } from "react";
import './App.css';
import Character from './components/Character.js'
import styled from 'styled-components';
const axios = require('axios');
const WrapperDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.dev/api/people/")
        .then(result => {
          setData(result.data.results)
          console.log(result.data.results[0])
        })
        .catch(error => {
          console.log("error: " + error)
        })
      };

    fetchData();
  }, [query]);
  
  if(data.length == 0){
    console.log("loading")
    return <h1>Loading</h1>
  }
  console.log(data)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <WrapperDiv>
        {
          data.map((character) => {
            return<Character name={character.name} birthyear={character.birth_year}>
            </Character>
          })
        }
      </WrapperDiv>
    </div>
  );
}

export default App;
