import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import Characters from './components/Characters';
import './App.css';
import { BASE_URL } from './constants/constants';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people,setPeople]=useState();
  const [currentpeople,setCurrentPeople]=useState(null);
  console.log(people);

 
 
  useEffect(()=>{
    axios.get(`${BASE_URL}`)
    .then(res => setPeople(res.data.results))
    .catch(err => console.log(err))
  },[])

  
  




  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters people={people} />
      
    </div>
  );
}

export default App;
