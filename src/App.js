import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character.js';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios
      .get("https://swapi.dev/api/people/")
      // Which we then set to state
      .then(res => {
        setData(res.data.results);
      console.log("fetch data", res.data.results);
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
      {/* <Character data={data}/> */}

      {data.map(char => {
          return <Character key={char.id} data={char}/>
        })}

    </div>
  );
}

export default App;
