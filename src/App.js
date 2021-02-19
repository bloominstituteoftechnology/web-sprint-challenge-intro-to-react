import React, {useState, useEffect} from 'react'
// import styled from 'styled-components'
import axios from 'axios'
import './App.css';
import Cards from './components/Cards'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([])
  

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then(res => {
      console.log(res.data)
      setCharacters(res.data)
    })
    .catch(err => {
      console.log(`Only Jar Jar would mess [${err}] up this badly`)
    })
  },[])

  console.log(`Characters`, characters)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Cards characters={characters}></Cards>
    </div>
  );
}

export default App;
