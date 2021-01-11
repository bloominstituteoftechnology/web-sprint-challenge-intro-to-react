import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';
import { Container } from 'reactstrap';

const App = () => {
  const [data, setData] = useState([]);
  const [homeworldData, setHomeworldData] = useState({});

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

  // QUESTION:  Should cleanUpData be written in a way that it does not modigy origData and if so, how would you write it?  Do I need to clone the objects before operating on them? *expensive* This helper function has inputs, outputs, AND side Fx (origData got changed).

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
    <div className="App">
      <h1 className="Header">Characters</h1>
     
      <Container class="Container">
 
      {data.map(char => {
          return <Character key={char.id} data={char} setHomeworldData={setHomeworldData}/>
        })}

      </Container>
      

    </div>
  );
}

export default App;
