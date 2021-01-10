import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  const [character, setCharacter] = useState([]) 
  
  useEffect( () => {
    axios   
        .get('https://rickandmortyapi.com/api/character')
        .then(success => {
            console.log('success', success);
            setCharacter(success.data.results);
            
        })

        .catch(fail => console.log('get fail', fail));

    },[])

  return (
    <div className="App">
      
      {character.map((char) => (
      <Character key={char.id} character={char} />
      ))}
    </div>
  )}

  
      

export default App;
