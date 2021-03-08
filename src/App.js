import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import Character from './components/Character'


const MainDiv = styled.div`

  border: 2px solid white;
  color: white;
  font-family: sans-serif;


`;


//test
//updating once more
console.log(Character);





const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out  
  // the state properties here.
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then(data => setFriends(data.results.name)
    ) }, [])


    const myName = 'jbev'



  return (
    <MainDiv>
      <h1 className="Header">Characters</h1>

      {friends.map(friend => <Character key = {friends} friend = {friend}/>, )}  

    </MainDiv>
  );
}

export default App;
