import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charactersList, setCharactersList] = useState([])
  const [charName, setCharName] = useState([])
  const [charData, setCharData] = useState([])

  const swapi = 'https://swapi.dev/api/people'

  useEffect(() => {
    axios
      .get(swapi)
      .then(response => {
        // console.log(response.data)
        setCharactersList(response.data)
        setCharName(response.data.name)
        setCharData(response.data)
      })
      .catch(error => {console.log(error)})
      .finally(fin => {console.log('finally from axios call')})
  }, [])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character charactersList = {charactersList} />
    </div>
  );
}

export default App;
