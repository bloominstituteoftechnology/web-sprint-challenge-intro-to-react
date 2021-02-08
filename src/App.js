import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  margin: 0 auto;
`

const App = () => {
// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.
const [data, setData] = useState([])
// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")

    .then((res)=>{
      console.log(res)
      setData(res.data.results)

    })
    .catch((err)=>{
      console.log(err)
    })

}, [])

return (
  <div className="App">
  <h1 className="Header">Star Wars Characters</h1>
  <StyledApp>

      <Character data = {data} />
      </StyledApp>
  </div>
);
}

export default App;