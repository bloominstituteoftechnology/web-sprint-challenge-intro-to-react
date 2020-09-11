import React, { useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'



function App () {
  const [charData, setCharData] = useState([])

  useEffect(() =>{
    axios
    .get(`https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9`)
    .then(response => {
      const charInfo = (response.data)
      console.log(response)
      setCharData(charInfo)
    })
    .catch(error =>{
      console.log("sorry no info", error)
    })
  },[])


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character character ={charData}/>
    </div>
  );
}

export default App;
