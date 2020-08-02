import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Character from './components/Character';



const App = ()=> {
  const [people, setPeople] = useState([]);
  const [otherState, setotherState] = useState(0)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    axios
        .get("https://swapi.dev/api/people/")
        .then(response => {
           setPeople(response.data.results)
          console.log(response, "consolelog from appjs")
        })
        .catch(error => {
          console.log(error.message)
        })
    
  }, [])

  // useEffect(() =>{
  //   console.log("people have changed", people)
  // }, [people])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ul>
      {people.map(people =>{
        return <Character key={people.name + people.birth_year} name={people.name}/>
      })}
      </ul>
      

    </div>
  
   
  );
}

export default App;