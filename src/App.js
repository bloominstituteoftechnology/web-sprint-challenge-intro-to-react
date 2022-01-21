import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import characterCard from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const initialCharacter = [
  
//     {
//       name: "Luke Skywalker", 
//       height: "172", 
//       mass: "77", 
//       hair_color: "blond", 
//       skin_color: "fair", 
//       eye_color: "blue", 
//       birth_year: "19BBY", 
//       gender: "male", 
//       homeworld: "https://swapi.dev/api/planets/1/", 
//       films: [
//           "https://swapi.dev/api/films/1/", 
//           "https://swapi.dev/api/films/2/", 
//           "https://swapi.dev/api/films/3/", 
//           "https://swapi.dev/api/films/6/"
//       ], 
//       species: [], 
//       vehicles: [
//           "https://swapi.dev/api/vehicles/14/", 
//           "https://swapi.dev/api/vehicles/30/"
//       ], 
//       starships: [
//           "https://swapi.dev/api/starships/12/", 
//           "https://swapi.dev/api/starships/22/"
//       ], 
//       created: "2014-12-09T13:50:51.644000Z", 
//       edited: "2014-12-20T21:17:56.891000Z", 
//       url: "https://swapi.dev/api/people/1/"
//   },
//   {
//     name: "Luke Skywalker", 
//     height: "172", 
//     mass: "77", 
//     hair_color: "blond", 
//     skin_color: "fair", 
//     eye_color: "blue", 
//     birth_year: "19BBY", 
//     gender: "male", 
//     homeworld: "https://swapi.dev/api/planets/1/", 
//     films: [
//         "https://swapi.dev/api/films/1/", 
//         "https://swapi.dev/api/films/2/", 
//         "https://swapi.dev/api/films/3/", 
//         "https://swapi.dev/api/films/6/"
//     ], 
//     species: [], 
//     vehicles: [
//         "https://swapi.dev/api/vehicles/14/", 
//         "https://swapi.dev/api/vehicles/30/"
//     ], 
//     starships: [
//         "https://swapi.dev/api/starships/12/", 
//         "https://swapi.dev/api/starships/22/"
//     ], 
//     created: "2014-12-09T13:50:51.644000Z", 
//     edited: "2014-12-20T21:17:56.891000Z", 
//     url: "https://swapi.dev/api/people/1/"
// }
  

  
]

function App(){
const [character, setCharacter]= useState(initialCharacter)


useEffect(()=> {
 axios("https://swapi.dev/api/people")
 .then((res)=>{
    setCharacter(res.data)
 })
}, [] )



  return (
    <div className="App">
      {
        return <characterCard />
    //  character.map(character => 
    //  <article key ={`App-charactermap-character{character.name}`}>
    //  <h1 className="Header">{character.name}</h1>
    //  <p> height: {character.height}</p>
    //  <p> mass: {character.mass}</p>
    //  <p> hair_color: {character.hair_color}</p>
    //  <p> skin_color: {character.skin_color}</p>
    //  <p> eye_color: {character.eye_color}</p>
    //  <p> birth_year: {character.birth_year}</p>
    //  <p>gender:{character.gender}</p>
    //   </article>)
        
      }
    </div>
        );
  }
   return App
}
  
      

export default App;
      