import React, { useState, useEffect }  from "react";
import './App.css';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import Character from '../src/components/Character';

function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter]=useState([]);
 

useEffect(()=>{
  axios.get('https://swapi.dev/api/people/')
  .then((r)=>{
    console.log(r);

    setCharacter(r.data.results);
  })
  .catch(()=>{
    console.log("errorr")

  })
},[])
console.log(character)

const StyledDetails = styled.div`
}
.indBlock {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}

.Header {
  font-size: 7em;
  color: #ff1a1a;
  opacity: 0.8;
  &:hover {
   
    transform: rotate(360deg);
    transition: all 2s ease-in-out;
  }
}
.Title {
  font-size: 3em;
  color: #ff3333;
  opacity: 0.8;
}

`

  return (
    <StyledDetails id='detailsView' className ='container'>
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      <h2 className="Title">Main Characters List</h2>
      <div className= "Blocks">
        <div className= "indBlock">
        {character.map((i) =>
        <Character character = {i}/>
      )}
        </div>

      </div>
    </div>
    </StyledDetails>
  );
}

export default App;
