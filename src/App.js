import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
// import characterData from 'https://swapi.dev/api/films/results';
 const initialCharacters = [
  {
  name: "mike",
  id:0,
  height: 172, 
  mass: 77, 
  hair_color: "blond", 
  skin_color: "fair", 
  eye_color: "blue", 
  birth_year: "19BBY", 
  gender: "male", 
},
{
  name: "carly",
  id:1,
  height: 172, 
  mass: 77, 
  birth_year: "19BBY", 
  gender: "male", 
}

]



const App = () => {
  const [characters, setCharacter] = useState(initialCharacters)


  const [currentCharacterId, setCurrentCharacterId] = useState(null)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios('https://swapi.dev/api/people')
    .then((res) => {
      setCharacter(res.data)
    })
    .catch((err) =>{
      console.log('please come back soon')
    })
  }, []
  )



  return ( 
    <div className="App">
      <h1 className="Header">
        
        {characters.map((character) => {
          return <Character key={`App-characterMap-character${character.name}`} character={character}/>; })}
          
        

      </h1>
    </div>
          
        )}

export default App;
