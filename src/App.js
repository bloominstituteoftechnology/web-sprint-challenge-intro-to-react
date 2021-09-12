import React, {useEffect, useState} from 'react';
import './App.css';


//import axios
import axios from 'axios';

//import API
import {BASE_URL} from './constants';
//import CharactersPL from './components/CharactersPL';
import Character from './components/Character';
//import char_info when i have a thing to
//import CharactersPL from './components/CharactersPL';

//STRETCH import FilmsInfo
import FilmsInfo from './components/FilmsInfo';

//style
import styled from 'styled-components';

const StyledChar = styled.div`
  display: flex;
  flex-flow: column wrap;
/*   border: 2px dashed black;*/ 
  margin: 5%;
  padding: 1%;
  height: 100%;
`


export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ person, setPerson] = useState([]);
  //const {name, height, weight} = props

  const [currentStarId, setCurrentStarId] = useState()

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setPerson(res.data)
      }).catch(err => {console.log(err)
    })
  }, []);



  const openInfo = id => {
    setCurrentStarId(id)
  }

  const closeInfo = () => {
    setCurrentStarId(null)
  }

  return (
    < StyledChar className="App">
      <h1 className="Header"> Characters </h1>
      {
      
      person.map((char) => {
          return <Character key={char.id} info={char} action={openInfo}/>
        })  
      }
      
    <div>
      {currentStarId && 
      <FilmsInfo filmInfo={currentStarId} close={closeInfo}/>
      }
      </div>
      
    </StyledChar>
      
  );
}
