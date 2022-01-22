import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import characterCard from './components/Character';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const initialCharacter = [
  
    {
      name: "Luke Skywalker", 
      height: "172", 
      mass: "77", 
      hair_color: "blond", 
      skin_color: "fair", 
      eye_color: "blue", 
      birth_year: "19BBY", 
      gender: "male", 
  },
  {
    name: "Luke Skywalker", 
    height: "172", 
    mass: "77", 
    hair_color: "blond", 
    skin_color: "fair", 
    eye_color: "blue", 
    birth_year: "19BBY", 
    gender: "male", 
  }

  
]

function App(){
const [character, setCharacter]= useState(initialCharacter)


useEffect(()=> {
 axios("https://swapi.dev/api/films")
 .then((res)=>{
   console.log(res.data)
    setCharacter(res.data)
 })
}, [] )
.catch((err) => {
  console.log(`We're working on this`)
})


  return (
    <StyledApp>
      {
        character.map(character => {
        return <characterCard  key ={`App-charactermap-character{character.name}`} character={character} />
   

      })
}
    </StyledApp>

        );
  }
   return App
}
  
      

export default App;
      