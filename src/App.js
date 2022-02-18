import React, {useState, useEffect} from 'react';
import './App.css'
import {data} from './mocks/handlers'
import axios from 'axios'
import Character from './components/Character'


console.log('data', data)
data.map(item =>{
  console.log('hello', item)
})
const App = () => {
  const [character, setCharacter] = useState(data)

 
useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then (res =>{
    setCharacter(res.data)
  })
  .catch (err => console.error(err))
}, [])

console.log('final', character)


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
      {/* <Character character={character}/> */}
      {
      character.map(character =>{
      return (
        <Character key = {`App-characterMap-character${character.created}`} character= {character} />
      )
    })
}
    </div>
  );
}

export default App;
