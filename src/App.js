import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Characters from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [results, setResults] = useState([])
const [currentCharacterId, setcurrentCharacterId] = useState(null)

const openCharDetails = id => {
  setcurrentCharacterId(id)
}

const closeCharDetails = () => {
  setcurrentCharacterId(null)
}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
useEffect(() => {
  axios.get('https://swapi.dev/api/people')
  .then(({data}) => setResults(data))
  .catch((err) => console.log(err))
}, [])

const Character = props => (
  <div className='character'>
    {props.info.name}
    <button onClick={() => openCharDetails(props.info)}>
      Target File
    </button>
  </div>
)
  return (
    <div className="App">
      <h1 className="Header">Boba's Black Book</h1>
      {results.map(results => {
        return <Character key={results.characterId} info={results}/>
      })
      }
      {
        currentCharacterId && <Characters characterId={currentCharacterId} close={closeCharDetails} />
      }
    </div>
  );
}

export default App;
