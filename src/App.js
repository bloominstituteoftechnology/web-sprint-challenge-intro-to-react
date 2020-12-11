import React, {useEffect,useState} from 'react';
import './App.css';
import axios from "axios"
import Characters from "./Characters"
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
   const [rickAndMort,SetRickAndMort]= useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=19`)
        .then((res) => {
          SetRickAndMort(res.data.results);
           console.log(res.data.results[0])
           
          
        })
        .catch((err) => {
          // console.log(err);
        });
  

    
  }, []);

      return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters ={rickAndMort}/>
    </div>
  );
}

export default App;
