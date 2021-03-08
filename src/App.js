import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setpeople] = useState([]);

  useEffect(()=> {
    axios.get('https://swapi.dev/api/people/')
    .then(response => {
      setpeople(response.data);
  })
  .catch((error) => {
    console.log(error, "Opps somethings not right")
  })
}, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
console.log(people)
 
return (
  <div className="App">
    <h1 className="Header">Characters</h1>
  
      {
      people.map(ch => {
        return <Character key={ch.id} info={ch} />
      })
      }
  </div>
);
}

export default App;

