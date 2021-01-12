import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';
import { Container } from 'reactstrap';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const App = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  function cleanUpData (origData) {
    // takes an array of objects, removes obj keys .created, .edited, .url
    const cleanData = origData.map(object => {
      delete object.created;
      delete object.edited;
      delete object.url;
      return object;
    });
    return cleanData;
  }; 

  // ANS: create new object with values needed.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      // Which we then set to state
      .then(res => {
        const cleanData = cleanUpData(res.data.results);
        setData(cleanData);
      // console.log("fetch data", res.data.results); // it works
      })
      // Always include error handling
      .catch(err => console.log(err));
  }, []); // fetchData



  return (
    <div class="App">
      
      <h1 class="header">Star Wars</h1>

     
      <div class="main-container">

          <div class="title-container">C<br/>h<br/>a<br/>r<br/>a<br/>c<br/>t<br/>e<br/>r<br/>s</div>

          <div class="main-characters-container">
            {data.map(char => {
                return <Character key={char.id} data={char}/>
              })}
          </div>

      </div>
    
    </div>
  );
}

export default App;
