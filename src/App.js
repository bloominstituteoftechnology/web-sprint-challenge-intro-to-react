import React, {useEffect, useState} from 'react';
import './App.css';
//import CharactersPL from './components/CharactersPL';
import Character from './components/Character';
//import char_info when i have a thing to

//import axios
import axios from 'axios';

//import API
import {BASE_URL} from './constants';

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


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ person, setPerson] = useState([]);
  //const {name, height, weight} = props

  //const [currentStarId, setCurrentStarId] = useState()

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      //console.log(`${BASE_URL}`)
      .then(res => {
        setPerson(res.data)
      }).catch(err => console.log(err))

  }, []);

  //const openDetails = id => {
  //  setCurrentStarId(id)
  //}

  //const closeDetails = () => {
  //  setCurrentStarId(null)
  //}

  return (
    <div className="App">
      <h1 className="Header"> Characters </h1>
      {person &&
      
      <StyledChar className='container' > 
      {
        person.map((char, idx) => {
          return <Character key={char.idx} info={char} /* action={openDetails} */ />
        })
      }

      {/* {<Character/>name.map(name => { return  name={name}})} */}
      {person.name}
      </StyledChar>
      
      }
      {/* {
        currentStarId && <CharInfo starId={currentStarId} close={closeDetails} />
      } */}
    </div>
      
  );
}

export default App;
