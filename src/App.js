import axios from 'axios';
import React, { useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character'
import Bio from './components/Bio'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [charData, setCharData] = useState([]);
  const [currentChar, setCurrentChar] = useState(null);

  const openChar = id => {
    setCurrentChar(id)
  }

  const closeChar = () => {
    setCurrentChar(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(res => {
      setCharData(res.data);
    })
    .catch(err => {
      debugger
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {/* <Character className="Character" name={charData.name}/>
      <Bio className="Bio" name={charData.name}/> */}
      {
        charData.map(cr => {
          return <Character className="Character" key={cr.id} info={cr} openChar={openChar} closeChar={closeChar} />
        })
      }
      {
        currentChar && <Bio className="Bio"
        displayChar={currentChar} close={closeChar}
      />
      }
    </div>
  );
}

export default App;
