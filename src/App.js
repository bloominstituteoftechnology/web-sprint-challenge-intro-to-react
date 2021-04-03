import React,{useState,useEffect} from 'react';
import './App.css';
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import Character from './components/Character.js'
import Characters from './components/Characters.js'
import {BASE_URL} from './constants.js'
import axios from 'axios'


const App = () => {

    //set up necessary slices of state
    const [characters, getCharacters] = useState([])
    const [currentCharacterId, setCurrentCharacterId] = useState(null)

    // use 'useEffect' hook to make API call
    useEffect(() =>{
        axios.get( `${BASE_URL}/people`)
        .then(response => {
            console.log(response)
            getCharacters(response.data)
        })
    },[])

    // This function shows the details of the particular character whose expand button was pressed
   const showCharacterDetails = characterName =>{

  // for each character
     const revealDetails = characters.map(character =>{
    
      // if character id matches characterId
       if(character.name === characterName){
         // return a new character object revealing details
         setCurrentCharacterId(characterName)
         return character
       }else{
         return character
       }
     })
     setCurrentCharacterId(revealDetails)
   } 

  // // Try to think through what state you'll need for this app before starting. Then build out
  // // the state properties here.

  // // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // // side effect in a component, you want to think about which state and/or props it should
  // // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
        <Characters characters={characters}
          showCharacterDetails={showCharacterDetails}
          currentCharacterId={currentCharacterId}
        />
        
       </div>
  );
}

export default App;
