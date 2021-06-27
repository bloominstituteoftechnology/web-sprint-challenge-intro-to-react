import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
//import styled from 'styled-components'

import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  //If you don't want to hardcode API in many different places - set it to a varible
  // ??? why is the api only grabbing 6 people???
  const [baseURL] = useState("https://swapi.dev/api/people/?page=2")
  const [characters, setCharacters] = useState([])
  // adding style ??? why this not work???
  // const Button = styled.button`
  // background-color: red;
  
  // `;

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  // adding useEffect so app wont keep rerendering, it will run once bc there's nothing in dependency array at the end

  useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      /// ??? why is this grabbing only 6 people, there are 10 ???
      console.log(response.data)
      setCharacters(response.data)
      
    })
    .catch(err => { console.log(err)})
  },[])
  
  console.log(characters)

  return (
    <div className="App">
      <h1 className="Header">Star Wars </h1>
      <button>Characters</button>
        <main>
          <Character myName="Alieze" characters={characters}/>
        </main>
        
    </div>
  );
}

export default App;
