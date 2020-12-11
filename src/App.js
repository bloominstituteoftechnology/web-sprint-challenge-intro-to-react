import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterData from "./components/Character";




const App = () => {
  const [rmData, setRmData] = useState([]);
    useEffect(() => {
      const fetchRmData = () => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(res => {
          setRmData(res.data);
        })
        .catch((err) => {
          console.log (err);
        })
      }
      fetchRmData()
    }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterData rmData = {rmData}/>
    </div>
  );
}

export default App;
