import React, {useState,useEffect} from 'react';
import './App.css';
import axios from "axios"
import CharacterCards from "./components/CharacterCards"
import Style from  "styled-components"






  export default function App () {

  const [rickAndMort ,SetRickAndMort] = useState([])

  useEffect(() => {
    
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=19`)
      .then((res) => {
         SetRickAndMort(res.data.results)
         console.log(res.data.results)
        
      })
      .catch((err) => {
         console.log(err);
      });


  
}, []);
  

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
   
    <CharacterCards characters ={rickAndMort}/>
 </div>

  );
}

