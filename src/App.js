import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from 
'./components/Character';
import data from './mocks/handlers.js'
export const BASE_URL = "https://swapi.dev/api/people"

const App = () => {
  const [peopleData, setPeopleData] = useState(data)


  // useEffect(() => {
  //   console.log(peopleData)
  //   axios.get(`${BASE_URL}`)
  //   .then(res => {
  //     console.log(res);
  //      setPeopleData(res.data); 
  //     } )
  //   .catch(err => { console.log(err) } )
  //   console.log(peopleData)

  // }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character peopleData={peopleData}></Character>
    </div>  
  );
}

export default App;
