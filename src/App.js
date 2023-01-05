import axios from 'axios';
import React, { useState, useEffect } from 'react';
//import Character from './components/Character';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  const [featuredCharacter, setFeaturedCharacter] = useState();

  //const [featuredCharacter, setFeaturedCharacter] = useState();


  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacters(res.data.results);
      }).catch(err => console.error(err));
  }, []);


  return (
    <div>
      <h1 className='Header'>Star Wars Characters</h1>
      { 
        characters.map(dev => 
          <p>{dev.name} <button onClick={() => {setFeaturedCharacter(dev.id)}}>More Info</button></p>
        )
      }
    </div>
  );

}
export default App; 
