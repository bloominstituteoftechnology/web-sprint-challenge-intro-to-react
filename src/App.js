import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starFolk,setStarFolk] = useState(null);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setStarFolk(res.data.results);
      setStarFolk(res.data);
    })
    .catch(err => {
      console.error(err)
    })
  }, []);


  const StarDiv = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 50%;
`
 
  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
    <StarDiv>
    {
      starFolk &&
      <>
      {
        starFolk.map((character, index) => {
          return <Character key={index} info={character}/>
        })
      }
      </>
    }
    </StarDiv>
    </div>
  );
};

export default App;
