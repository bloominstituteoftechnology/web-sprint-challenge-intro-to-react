import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from './constants/index';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [peopleList, setPeopleList] = useState([])

  const fetchPeople = () => {
    axios.get(`${BASE_URL}people/`)
      .then(res => {
        console.log('the API is running, catch it!')
        console.log(res.data)
      })
      .catch(err => {
        console.log('The API did Ups!')
      })
  }

  useEffect(fetchPeople, [])
  console.log(peopleList)



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
