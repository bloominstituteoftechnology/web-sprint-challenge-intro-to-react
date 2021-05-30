import React, { useState, useEffect} from 'react';
 import Character from './components/Character'
import './App.css';
const App = () => {  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [list, setList] = useState([])
const url = `https://swapi.dev/api/people/`;
useEffect(()=>{
const peopleList =()=>{
    fetch(url)
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      res.map((item,i)=>{
        return  fetch(url.concat(i+1))
        .then(res=>{
          return res.json()
        })
        .then(res=>{
          return setList(res.name)
        })
       
      })

    })
  } 
  peopleList();
  
},[url])
    
  
   
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character name={list} />
    </div>
  );
}

export default App;
