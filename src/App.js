import React, {useState, useEffect} from 'react';
import './App.css'
import {data} from './mocks/handlers'
import axios from 'axios'


console.log('data', data)
data.map(item =>{
  console.log(item)
})
const App = () => {
  const [characters, setCharacters] = useState(data)
  const [character, setCharacter] = useState()
useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then (res =>{
    console.log(res)
    setCharacters(res.data)
  })
  .catch (err => console.error(err))
}, [])

console.log('final', characters)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
// console.log(character)
// 
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
      data.map(item =>{
      return <div>
        <h2>{item.name}</h2>
          <p>`hailing from {item.homeworld}, {item.name} is a  human with {item.hair_color} hair, and {item.eye_color} eyes.</p>
          </div>
    })
}
    </div>
  );
}

export default App;
