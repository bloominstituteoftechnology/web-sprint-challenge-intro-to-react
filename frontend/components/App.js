import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets';
const urlPeople = 'http://localhost:9009/api/people';

function CharacterCard({ name, homeworld }) {
  return (
<div className="character-card">
  <h3>{name}</h3>
  <p>Homeworld: {homeworld}</p>
</div>
  );
}

function App() {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [planetsResponse, peopleResponse] = await Promise.all([
          axios.get(urlPlanets),
          axios.get(urlPeople)
        ]);
        setData1(planetsResponse.data);
        setData2(peopleResponse.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      <div className = 'character-card'>
      {data1 && data2 && data1.map((planet, index) => (
        <CharacterCard key={index} name={data2[index].name} homeworld={planet.name} />
      ))}
    </div>
    </div>
  );
}

export default App;
// comment
// ❗ DO NOT CHANGE THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App;
