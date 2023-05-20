import React, { useState, useEffect } from 'react';
import Character from './components/Character'
import axios from 'axios';
import { Button } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then(res => {
      setData(res.data);
    }).catch(err => console.error(err))
  },[])


  return (
    <div className="App">
      <h1 className='h1-title'>StarWars Characters</h1>
      {data && data.map(elem => {
        return (<Character key={elem.name} name={elem.name} eye_color={elem.eye_color} height={elem.height} gender={elem.gender} 
          mass={elem.mass} birth_year={elem.birth_year} hair_color={elem.hair_color} skin_color={elem.skin_color}></Character>)
      })}
    </div>
  );
}

export default App;
/*
birth_year: "19BBY"
created: "2014-12-09T13:50:51.644000Z"
edited: "2014-12-20T21:17:56.891000Z"
eye_color: "blue"
films: (4) ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'Revenge of the Sith']
gender: "male"
hair_color: "blond"
height: "172"
homeworld: "http://swapi.dev/api/planets/1/"
id: 1
mass: "77"
name: "Luke Skywalker"
skin_color: 
"fair"
species: [] 
starships: ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/']
url: "http://swapi.dev/api/people/1/"
vehicles: ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/']
*/
