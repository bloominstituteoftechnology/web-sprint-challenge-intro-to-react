import React, {useState, useEffect} from 'react';
import './App.css'

import axios from 'axios'
import Character from './components/Character'


// console.log('data', data)
// data.map(item =>{
//   console.log('hello', item)
// })
const App = () => {
  const [character, setCharacter] = useState([])
  
  const info= character.map(info => {
    return ( info)
  })
// console.log('hello', info)

useEffect(() => {
  axios.get(`https://swapi.dev/api/people`)
  .then (res =>{
    setCharacter(res.data)
    
  })
  .catch (err => console.error(err))
}, [])


character.map(item => {
  console.log ('waiting', item)
})

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
     <h2> {
      character.map(character =>{
      return (
        <Character key = {`App-characterMap-character${character.created}`} character= {character} info={info} />
      )
    })
      }</h2>
    </div>
  );
}

export default App;
