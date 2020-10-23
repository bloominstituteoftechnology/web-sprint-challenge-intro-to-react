import React, {useState, useEffect} from 'react';
import './App.css';
const axios = require('axios').default;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //<button onClick={() => setPage(page+1)}>Next page</button>
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchCharacters = () => 
    axios.get(`https://swapi.dev/api/people?page=${page}`)
    .then(res => {
      console.log(res.data);
      setCharacters(res.data);
    });
    fetchCharacters();
  }, [page])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
    </div>
  );
}

export default App;
