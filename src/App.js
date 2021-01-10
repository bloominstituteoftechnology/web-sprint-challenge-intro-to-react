import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  console.log(characters[0]);;
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() =>{
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
        setCharacters(res.data.results)
        console.log(res);
      })
      .catch(err =>{
        console.log('error', err)
      })
  }, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character =>(
      <Character key = {character.id} name ={character.name} species ={character.species} image ={character.image} origin ={character.origin.name}
      status ={character.status}/>))}
    </div>
  );
  
}

export default App;
