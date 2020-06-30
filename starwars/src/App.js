import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import { Container, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.
const [data, setData] = useState([])
// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

useEffect(() => {
    axios.get("https://rickandmortyapi.com/")
    .then((res)=>{
      console.log(res)
      setData(res.data.results)
    })
    .catch((err)=>{
      console.log(err)
    })
}, [])

return (
  <Container>
    <h1 className="Header">Rick and Morty Characters</h1>
    <Row>
      <Character data = {data} />
      </Row>
  </Container>
);
}

export default App;