import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import character from './components/Character'

const App = () => {
  const [characters, setCharacters] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

useEffect(() => {
  axios.get('https://https://swapi.py4e.com/api/people/1/')
  .then((res) => {
    setCharacters(response.data.results)
    console.log(response.data.results)
  })
  .catch((error) => {
    console.log(error)
  })
})
}, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <characters characters={characters}/>
    </div>
  );
}

export default App;
