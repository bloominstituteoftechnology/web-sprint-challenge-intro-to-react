import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import data from './mocks/handlers.js'
import Character from  './components/Character.js'
import { set } from 'msw/lib/types/context';
export const BASE_URL = 'https://swapi.dev/api/people'

const App = () => {


  const [peopleDate, setPeopleData] = useState(data)

  // const changeName () => {
  //   setPeopleData({...setPeopleData, name: "Puke"})
  // }

  // useEffect(() => {
  //   console.log(peopleDate)
  //   axios.get(`${BASE_URL}/1/`)
  //   .then(res => {
  //     console.log(res)
  //     console.log(peopleDate);
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
       <Character peopleData={peopleDate}></Character>
    </div>
  );
}

export default App;
