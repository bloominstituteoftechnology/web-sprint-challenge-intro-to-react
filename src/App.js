import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import './components/Character';
import './App.css';


// don't forget the dependency array
const App = () => {
  const [data, setCharacter] = useState()
  
// const baseURL = 'http://swapi.dev/'
  useEffect(() => {  
      axios.get('https://swapi.dev/people')
          .then((req) => {   
            setCharacter(req.data)
            console.log(req.data)  
      })
      .catch(err => { 
          console.log(err);
      })
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
