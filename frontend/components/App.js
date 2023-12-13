import React, { useEffect, useState } from 'react';
import Character from './Character';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:9009/api/people').then(res => res.json()),
      fetch('http://localhost:9009/api/planets').then(res => res.json())
    ]).then(([people, planets]) => {
      const peopleWithPlanets = people.map(person => ({
        ...person,
        homeworld: planets.find(planet => planet.id === person.homeworld)
      }));
      setCharacters(peopleWithPlanets);
    });
  }, []);

  return (
  <div>
    <h2>Star Wars Characters</h2>
    {characters.map(character => (
      <Character key={character.id} character={character} />
    ))}
  </div>
);
}
export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
