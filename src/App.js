import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import {   Card, CardImg, CardText, CardBody,    CardTitle, CardSubtitle,   } from 'reactstrap';


const App = () => {

  const [characters, setCharacters] = useState([])

  // fetch data
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then((response) => {
          setCharacters(response.data.results)
          console.log(response)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])

  // return data
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        <Card>
          {characters.map((item) => {
          return(
            <Character key={item.name} name={item.name} gender={item.gender} />
            )})}
        </Card>
    </div>
    );
  };
export default App;
