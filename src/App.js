import React, {useState} from 'react';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [character, setCharacter] = useState([
  
    {
      name: "Luke Skywalker", 
      height: "172", 
      mass: "77", 
      hair_color: "blond", 
      skin_color: "fair", 
      eye_color: "blue", 
      birth_year: "19BBY", 
      gender: "male", 
      homeworld: "https://swapi.dev/api/planets/1/", 
      films: [
          "https://swapi.dev/api/films/1/", 
          "https://swapi.dev/api/films/2/", 
          "https://swapi.dev/api/films/3/", 
          "https://swapi.dev/api/films/6/"
      ], 
      species: [], 
      vehicles: [
          "https://swapi.dev/api/vehicles/14/", 
          "https://swapi.dev/api/vehicles/30/"
      ], 
      starships: [
          "https://swapi.dev/api/starships/12/", 
          "https://swapi.dev/api/starships/22/"
      ], 
      created: "2014-12-09T13:50:51.644000Z", 
      edited: "2014-12-20T21:17:56.891000Z", 
      url: "https://swapi.dev/api/people/1/"
  },
  {
    name: "Luke Skywalker", 
    height: "172", 
    mass: "77", 
    hair_color: "blond", 
    skin_color: "fair", 
    eye_color: "blue", 
    birth_year: "19BBY", 
    gender: "male", 
    homeworld: "https://swapi.dev/api/planets/1/", 
    films: [
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/2/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/6/"
    ], 
    species: [], 
    vehicles: [
        "https://swapi.dev/api/vehicles/14/", 
        "https://swapi.dev/api/vehicles/30/"
    ], 
    starships: [
        "https://swapi.dev/api/starships/12/", 
        "https://swapi.dev/api/starships/22/"
    ], 
    created: "2014-12-09T13:50:51.644000Z", 
    edited: "2014-12-20T21:17:56.891000Z", 
    url: "https://swapi.dev/api/people/1/"
}
  

  
])


  return (
    <div className="App">
      {
        character.map(character => 
         <article>
      <h1 className="Header">{character.name}</h1>
      </article>)
        
      }
    </div>
        );
  }
   
      
  
      

export default App;
      