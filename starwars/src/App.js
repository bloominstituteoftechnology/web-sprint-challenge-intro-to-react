import React, { useState, useEffect }  from "react";
import './App.css';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';



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

    setCharacter([r.data.results.name, r.data.results.birth_year]);
  })
  .catch(()=>{
    console.log("errorr")

  })
},[])


const StyledDetails = styled.div`

.Blocks {
  background-color: #ffa64d;
  height: 200px;
  width:40%;
  opacity: 0.5;
  border-radius: 20px;
  border-style: ridge;
  border-width:10px;
  

}
`



  return (
    <StyledDetails id='detailsView' className ='container'>
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      <h2 className="Title">Main Characters List</h2>
      <div className= "Blocks">

        <h3 className={character.map(i =>
          <data.results.name {i.character})}></h3>
          
        <p className ="Birth"></p>
        <p className="Films"></p>

      </div>
    </div>
    </StyledDetails>
  );
}

export default App;
