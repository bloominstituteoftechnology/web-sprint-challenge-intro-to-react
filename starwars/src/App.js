import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';


const App = () => {

  const [ StarWarsData, setStarWarsData ] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.py4e.com/api/people/')
      .then(res =>{
        console.log("Star Wars Data:",res)
        setStarWarsData(res.data.results);
      })
      .catch(err=> {
        console.log('Error:',err)
      })
  },[])

  return (
    <div>
      <h1 style={{color:'white', textAlign:'center'}}>Star Wars Characters</h1>
      {StarWarsData.map(people => {
        return (
          <Character
            key={people.id}
            height={people.height}
            name={people.name}
            birthYear={people.birth_year}
            hairColor={people.hair_color}
            skinColor={people.skin_color}
          />
        );
      })}
    </div>
  );
}

export default App;
