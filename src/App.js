import React,{useState,useEffect} from 'react';
import './App.css';
import axios from "axios"
//import Character from "./components/Character"


const App = () => {

  let [swcharacters,setswcharacters] = useState([])


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

useEffect(function(){
axios.get("https://swapi.dev/api/people/")
.then(function(swdata){
 setswcharacters(swdata.data.results)
})
},[])

 console.log(swcharacters)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
 <div>
   {swcharacters.map(function(item){
     
   })}
 </div>
  );
}

export default App;
