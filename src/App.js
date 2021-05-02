import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters, setCharacters] = useState([])
const [currentCharacterId, setcurrentCharacterId] = useState(null)

const openCharDetails = id => {
  setCharacterId(id)
}

const closeCharDetails = id => {
  setCharacterId(null)
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(({data}) => setCharacters(data))
  .catch((err) => console.log(err))
}, [])

const Character = props => (
  <div className='character'>
    {props.name}
    <button onClick={() => openCharDetails(props.id)}>
      Target File
    </button>
  </div>
)
  return (
    <div className="App">
      <h1 className="Header">Boba's Black Book</h1>
      {characters.map(characterId => {
        return <Character key={characterId.id} />
      })
      }
      {
        currentCharacterId && <Character characterId={currentCharacterId} close={closeCharDetails} />
      }
    </div>
  );
}

export default App;
