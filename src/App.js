import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import './components/Character'

// don't forget the dependency array
const App = () => {
  const [data, setData] = useState({})
  
const baseURL = 'https://swapi.dev/'
  useEffect(() => {  
      axios.get(`${baseURL}`)
          .then((response) => {   
            setData(response.data)
            console.log(response.data)  
      })
      .catch( error => { 
          console.log(error);
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
