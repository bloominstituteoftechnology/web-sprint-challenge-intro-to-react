import React ,{useState, useEffect}from 'react';
import './App.css';
import axios from 'axios';
import Character from "./components/Character.js"

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 function App() {
 const [photo, setPhoto ] = useState([])





 useEffect(() => {   ///This effect will only fire once when the component is on the dom
 axios.get("https://swapi.dev/api/people/")
.then(res => {

setPhoto(res.data) 
})  
.catch(err => {
console.log(err)  
})
},[] )
console.log(photo)







   return ( // for the userEffect to work we must implement the state inside one of the jsx divs

   

<div className="App"> 
<h1>  Star Wars </h1> 

<Character character={photo}/> 

</div>
);


}














export default App;

