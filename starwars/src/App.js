import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharacterMap from './components/CharacterMap'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data,setData] = useState([])
  useEffect(() => {
   
    // Update the document title using the browser API
    axios.get('https://swapi.dev/api/people/')
  .then(function (response) {
    
    setData(response.data.results)
    

  })
  .catch(function (error) {
    console.log(error);
  });

  }, []);


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterMap data={data} />
    </div>
  );
}

export default App;
