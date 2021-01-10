import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';
import { Container } from 'reactstrap';

const App = () => {
  const [data, setData] = useState([]);

  function cleanUpData (originalData) {
    // an array of objects
    const cleanData = originalData.map(object => {
      delete object.created;
      delete object.edited;
      delete object.url;
    });
    console.log("Clean data: ", cleanData);

  };

  useEffect(() => {

    axios
      .get("https://swapi.dev/api/people/")
      // Which we then set to state
      .then(res => {
        cleanUpData(res.data.results);
        setData(res.data.results);
      // console.log("fetch data", res.data.results); // it works
      })
      // Always include error handling
      .catch(err => console.log(err));
      
  }, []);

  // useEffect(() => {
  //   console.log("Log this when data state changes");
  // }, data);

  // console.log("Data: ", data); 

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
     
      <Container class="Container">
 
      {data.map(char => {
          return <Character key={char.id} data={char}/>
        })}

      </Container>
      

    </div>
  );
}

export default App;
