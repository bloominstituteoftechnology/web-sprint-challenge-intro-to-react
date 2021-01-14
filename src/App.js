import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import New from './components/New'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const defaultData = { name: '', status: '', species: '', location: '', img: ''} 
  const [ data, setData ] = useState(defaultData);
  const [ data1, setNew ] = useState(defaultData)
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/1')
    .then(response => {
      console.log(response.data);

      setData(response.data)
    })
    .catch(error => {
      console.log('We have an error')
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        <div className ='rick'>
      <h2>{data.name}</h2>
      <img width="200" height="200" src={data.image}></img>
      <p><strong>Gender: </strong>  {data.gender}</p>
      <p><strong>Status: </strong>  {data.status}</p>
      <p><strong>Species:</strong> {data.species}</p>
      <p><strong>Location:</strong> {data.location.name}</p> 
        </div>
        <div className = "rick">
        <Character ></Character>
        </div>
        <div className = "rick">
        <New></New>
        </div>
    </div>
  );
}

export default App;
