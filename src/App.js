import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Characters from './components/Character'
import styled from 'styled-components'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characterName, setCharacterName] = useState([])
const [currentCharacterId, setcurrentCharacterId] = useState(null)

const openCharDetails = name => {
  setcurrentCharacterId(name)
}

const closeCharDetails = () => {
  setcurrentCharacterId(null)
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(({data}) => setCharacterName(data))
  .catch((err) => console.log(err))
}, [])

const Character = props => (
  <div className='character'>
    {props.info.name}
    <button onClick={() => openCharDetails(props.info.name)}>
      Target File
    </button>
  </div>
)
  return (
    <Div className="character">
      <h1 className="Header">Boba's Black Book</h1><br />
      

      <Div2 className="characterNames">
      {characterName.map(char => {
        return <Character key={char.name} info={char}/>
        
      })
      
      }
      {currentCharacterId && <Characters name={currentCharacterId} close={closeCharDetails} />}
      </Div2>  
    </Div>
    
  );
}


const Div = styled.div`
display:flex;

justify-content:center;
`

const Div2 = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
`
export default App;
