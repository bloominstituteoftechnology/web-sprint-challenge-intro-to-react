import axios from 'axios';
// import { data } from 'msw/lib/types/context';
import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character'



  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const App = () => {
  const [starWarsData, setStarWarsData] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      console.log(res)
      setStarWarsData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, ['https://swapi.dev/api/people/'])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starWarsData.map(item => {
        return <Character data={item} />
      })}
    </div>
  );
}

export default App;


