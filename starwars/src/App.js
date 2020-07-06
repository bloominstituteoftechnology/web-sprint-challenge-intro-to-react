import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Character';
// import Pokemon from "./components/Character.js";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [peeps, setPeeps]= useState([])
   useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then(res => {console.log(res)
      setPeeps(res.data.results);
    })
      .catch(err => console.log('Theres an error', err))
  
  },[]);

  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      {peeps.map((characters,i)=>{
        return(
          <Characters
          key={i}
          name={characters.name}
          bday={characters.birth_year}
          gender={characters.gender}
          height={characters.height}
          weight={characters.mass}
          hair={characters.hair_color}
          eye={characters.eye_color}
          />

        )})}
    </div>
  );
}

// working
export default App;
