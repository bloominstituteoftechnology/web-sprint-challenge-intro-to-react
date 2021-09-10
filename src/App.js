import React, {useEffect, useState} from 'react';
import './App.css';
import CharactersPL from './components/CharactersPL';
import Character from './components/Character';
//import char_info when i have a thing to

//import axios
import axios from 'axios';

//import API
import {BASE_URL} from './constants';

//style
import styled from 'styled-components';

const StyledChar = styled.div`
  border: 2px solid grey;
  height= 80vh;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ person, setPerson] = useState([]);
  //const {name, height, weight} = props

  //const [currentFriendId, setCurrentFriendId] = useState()

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      //console.log(`${BASE_URL}`)
      .then(res => {
        setPerson(res.data)
      }).catch(err => console.log(err))
      /* return () =>{
        console.log(`fetching ${BASE_URL}`)
      } */
  }, []);

  //const openDetails = id => {
  //  setCurrentFriendId(id)
  //}

  //const closeDetails = () => {
  //  setCurrentFriendId(null)
  //}

  return (
    <div className="App">
      <h1 className="Header"> Characters </h1>
      {person &&
      <div>
      <StyledChar className='container' > 
      {
        person.map((fr, idx) => {
          return <Character birth= {idx.birth} key={fr.id} info={fr} /* action={openDetails} */ />
        })
      }

      {/* {<Character/>name.map(name => { return  name={name}})} */}
      {person.name}
      </StyledChar>
      </div>
      }
      {/* {
        currentFriendId && <CharInfo friendId={currentFriendId} close={closeDetails} />
      } */}
    </div>
      
  );
}

export default App;
