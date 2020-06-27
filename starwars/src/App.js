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
      {StarWarsData.map(people => {
        return (
          <Character
            key={people.id}
            name={people.name}
            mass={people.mass}
            hairColor={people.hair_color}
            skinColor={people.skin_color}
          />
        );
      })}
    </div>
  );
}

export default App;
