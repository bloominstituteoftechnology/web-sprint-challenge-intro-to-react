import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL, API_KEY} from './index'
import Character from './components/Character';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [charactersId, setCharactersId] = useState(null);
  const [error, setError] = useState(null);

  const openDetails = id => {
    setCharactersId(id)
  }
  const closeDetails = () => {
    setCharactersId(null)
  }
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => {
        console.error(err);
        setError("Sorry, try again soon!");
      })
  }, [])

  const Char = props => {
    <div className='Char'>
      {props.info.name}
      <button onClick={(openDetails(props.info.id))}>
        see details
      </button>
    </div>
  }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      { error && <h1>{error}</h1> }
      <h1 className="Header">Star Wars</h1>
      {
        characters.map(fr => {
          return <Character
          key={Char.id}
          info={Char}
          openDetails={openDetails}
          closeDetails={closeDetails}
          />
        })
      }
      {
        charactersId && <Character friendId={charactersId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
