import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import Characters from './components/Characters.js'
import {BASE_URL} from './constants.js'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

// Styling for page header
const StyledHeader = styled.h1`
font-family: 'Megrim',cursive;
font-weight:900;
font-size:150px;
text-align:center;
`
const App = () => {

    //set up necessary slices of state
    const [characters, getCharacters] = useState([])
    const [currentCharacterId, setCurrentCharacterId] = useState()

    // use 'useEffect' hook to make API call
    useEffect(() =>{
        axios.get( `${BASE_URL}/people`)
        .then(response => {
            getCharacters(response.data)
        })
    },[])

  return (
    <div className="App">
      <StyledHeader>Characters</StyledHeader>
        <Characters characters={characters}
          currentCharacterId={currentCharacterId}
        />
        
       </div>
  );
}

export default App;
