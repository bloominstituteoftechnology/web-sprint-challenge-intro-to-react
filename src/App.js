import React, { useState, useEffect } from 'react';
import './App.css';
//import index from  './index.js'
import axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const [data, setData] = useState([])
  
  useEffect(()=> {
    axios
    .get(`https://swapi.dev/api/people/1/`)
    .then(res => {
      setData(res.data)
      console.log(res.data, 'data')
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
     {data.map( => {
        return <data
        key={data.id}
        data={data}
        setData={setData}
        />
      })}
      
    </div>
  );
}

export default App;
