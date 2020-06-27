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
        setStarWarsData(res.data);
      })
      .catch(err=> {
        console.log('Error:',err)
      })
  },[])

  return (
    <div className="App">
      {StarWarsData.map(ppl => {
        return (
          <Character
            key={ppl.id}
            name={ppl.title}
            height={ppl.height}
            mass={ppl.mass}
            hairColor={ppl.hair_color} />
        );
      })}

    </div>
  );
}

export default App;
