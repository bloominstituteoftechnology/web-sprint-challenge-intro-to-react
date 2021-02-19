import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import './App.css';
import Character from './components/Character'
// import constants from './constants'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsCharacters, setStarWarsCharacters] = useState([])
  // const [currentCharacterId, setCurrentCharacterId] = useState('')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() => {
    const fetchCharacterData1 = () => {
      Axios
      .get('https://swapi.dev/api/people/?format=json')
      .then(res => {
        console.log(`this is working`, res)
        setStarWarsCharacters(res.data)
      })
      .catch(err => {
        console.log(`${err}`)
        console.log('U GOT AN ERR')
    })
    }

    fetchCharacterData1()

  }, [])
  



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {starWarsCharacters.map((ch) => {
        return <Character key={Math.random()} starWarsCharacters={starWarsCharacters}/>
      })}

    </div>
  );
}

export default App;
