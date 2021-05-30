import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CloseButton from './components/Character';
import styled, { keyframes } from 'styled-components'

const StyledButton = styled.button `
  text-align: left;
  border: 2px solid black;
width: 15%;
margin-left: 1%;
padding: 2px;
font-weight: bold;

`
const App = () => {

  const [data, setData] = useState([]);
  const [currentCharacterId, setCurrentCharacterid] = useState(null)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const openDetails = id => {
    setCurrentCharacterid(id)

  }

const closeDetails = () => {
  setCurrentCharacterid(null)
}

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    // use Axios to fetch /friends
    // on success, use setFriends to put in state (friends variable)
    // const apiUrl = BASE_URL + '/friends' + '?api_key=' + API_KEY
    //const apiUrl = `${BASE_URL}/friends?api_key=${API_KEY}`
    axios
    .get('https://swapi.dev/api/people/')
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(setData)
  }, [])

  const Characters = props => (
    <div className='character'>
      {props.info.name}
      <StyledButton onClick={() => openDetails(props.info.name)}>
        See details
      </StyledButton>
    </div>
  )


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
      data.map(fr => {
       return <Characters key={fr.name} info={fr} details={openDetails}/>
})
}

  
{
        currentCharacterId && <CloseButton  CloseButton characterId={currentCharacterId} close={closeDetails} />
}      
      

    </div>
  );
}

export default App;
