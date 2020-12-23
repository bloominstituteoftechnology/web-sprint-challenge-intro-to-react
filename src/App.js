import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios"
import Characters from "./components/Character"
import Style from "styled-components"

const App = () => {
 
const [rickAndMort, SetRickAndMort] = useState([])


useEffect(() => {
    
  axios
    .get(`https://rickandmortyapi.com/api/character/?page=19`)
    .then((res) => {
       SetRickAndMort(res.data.results)
       
      
    })
    .catch((err) => {
       console.log(err);
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
