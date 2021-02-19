import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character.js'
import styled from 'styled-components'
const Title = styled.h1`
  font-size: 60px;
  color: white;
`
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then((res)=>{
      setData(res.data)
    })
    .catch()
  },[])
  

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <Title className="Header">React Wars @</Title>
      {data.map(element=>Character({'data':element}))}
    </div>
  );
}

export default App;
