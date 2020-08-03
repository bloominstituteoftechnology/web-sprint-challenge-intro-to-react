import React, { useState, useEffect } from "react";
import './App.css';
import Character from './components/Character.js'
import styled from 'styled-components';
import { Spinner } from 'reactstrap';
const axios = require('axios');
const WrapperDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SWHeader= styled.h1 `
  color:  #EEDB00;
`
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
    return <Spinner style={{ width: '3rem', height: '3rem' }} />
  }
  console.log(data)
  return (
    <div className="App">
      <SWHeader className="Header">Characters</SWHeader>
      <WrapperDiv>
        {
          data.map((character) => {
            return<Character data={character}>
            </Character>
          })
        }
      </WrapperDiv>
    </div>
  );
}

export default App;
