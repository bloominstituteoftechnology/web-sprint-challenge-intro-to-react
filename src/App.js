import React, {useEffect, useState} from 'react';
import './App.css';
import Character from "./components/Character"
import axios from 'axios'
import { render } from '@testing-library/react';

const PORTAL = 'https://rickandmortyapi.com/api/character/'

function App() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    axios
      .get(PORTAL)
      .then((res) => {
        console.log(res.data)
        setPerson(res.data.results)
        })
            .catch(err => {
        console.log(`ERROR: ${err}`)
      })

    
    },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {person.map(per => <Character
      key= {per.id}
      name= {per.name} 
      status= {per.status} 
      species= {per.species} 
      image= {per.image} 
      origin= {per.origin.name} 
       />)}
   
      
    </div>
  );
};

export default App;
