import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js'
// import { rest } from 'msw/lib/types';

const url = "https://swapi.dev/api/people";
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


//   useEffect(()=>{
//     axios.get(url).then((res)=>{
//       console.log("DATA!",res);
//     })
// },[])


  
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character src = {url}/>
    </div>
  );
}

export default App;
