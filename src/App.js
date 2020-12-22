<<<<<<< HEAD
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
  
=======
import React, {useEffect,useState} from 'react';
import './App.css';
import axios from "axios"
import Characters from "./Characters"
import Style from "styled-components"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
   const [rickAndMort,SetRickAndMort]= useState([])
   const [searchTerm, setSearchTerm] = useState([])
>>>>>>> 754c147f8e565aaf928b47f9430658cbda9635a0

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=19`)
        .then((res) => {
           SetRickAndMort(res.data.results)
           
          
        })
        .catch((err) => {
           console.log(err);
        });
  

<<<<<<< HEAD
  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
   
    <CharacterCards characters ={rickAndMort}/>
 </div>

  );
}
=======
    
  }, []);

      return (
     <div className="App">
       <h1 className="Header">Characters</h1>
      
       <Characters characters ={rickAndMort}/>
    </div>
   );

       }

 export default App;
>>>>>>> 754c147f8e565aaf928b47f9430658cbda9635a0

