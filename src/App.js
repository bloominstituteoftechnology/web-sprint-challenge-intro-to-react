import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled, {keyframes} from 'styled-components'

import Axios from 'axios'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // Setup array containing all the characters
  const [allCharacters, changeCharacters] = useState([])

  // Gets data for all the characters, must run only once.
  useEffect(() => {
    Axios.get('https://swapi.dev/api/people')
      .then(response => {
        console.log(response.data)
        changeCharacters(stripData(response.data.results))
      })
      .catch(error => console.log(error))
  }, [])

  const entry = keyframes`
  from{
    opacity:0
  }
  to{
    opacity:1
  }
  `

function stripData (data){
    const newList = data.map(item=>
      {
        return {hair_color:item['hair_color'], name:item['name'], height:item['height'], masS:item['mass']}
      }
      )

    return newList
  }


  // Header styling
  const Header = styled.h1`
  font-family: ${pr=>pr.theme.headingFont};
  font-size:3rem;
  letter-spacing:8px;
  text-shadow: 3px 3px 0px rgba(255, 255, 255, 1);
  
  `

  const App = styled.div`
  animation: ${entry} 1s ease-in;
  text-align:center;
  `

  


  return (

    // App container
    <App>

      {/* Header container */}
      <Header>Characters</Header>

      {/* Loop through all the characters and pass in appropriate properties */}
      {allCharacters.map(character => {
        return (
          <Character  name={character.name} height={character.height} mass={character.mass} hair_color={character.hair_color}></Character>
        )
      })

      }
    </App>
  );
}

export default App;
