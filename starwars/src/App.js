import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'

import Character from './components/Character'

const StyledApp = styled.div `
display:flex;
flex-direction: column;
border-style: dotted;
text-align: center;
width:100%;

`
const StyledHeader = styled.h1`
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
font-size:4rem;

`


const BASEURL = "https://swapi.py4e.com/api/people"

function App () {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([])
  
  
  useEffect(() => {
    axios.get(`${BASEURL}`)
    .then(res => {
      setCharacterList(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <StyledApp className="App">
      <StyledHeader className="Header">Characters</StyledHeader>
      {
        characterList.map((cr) => {
          return <Character info={cr}  />
        })
      }
    </StyledApp>
  );
}

export default App;
