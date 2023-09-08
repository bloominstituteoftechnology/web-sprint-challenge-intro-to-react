import React from 'react'
import { useState } from 'react'

function Character(props) { 
  const {character} = props;
  const [planetToggle, setPlanetToggle] = useState(false);

  const toggle= () => {
    setPlanetToggle(!planetToggle);
  }

  return (
    <div className="character-card" onClick={(e) => toggle()}>
      <h3 className="character-name">{character.name}</h3>
      <p>Birth_year: {character.birth_year}</p>
      <p>Eye_color: {character.eye_color}</p>
      <p>Gender: {character.gender}</p>
      <p>Hair_color: {character.hair_color}</p>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Skin_color: {character.skin_color}</p>
      {
        planetToggle? 
        <div className="character-planet">
          <h3>{character.homeworld.name}</h3>
          <p>Climate: {character.homeworld.climate}</p>
          <p>Diameter: {character.homeworld.diameter}</p>
          <p>Gravity: {character.homeworld.gravity}</p>
          <p>Orbital_period: {character.homeworld.orbital_period}</p>
          <p>Population: {character.homeworld.population}</p>
          <p>Rotation_period: {character.homeworld.rotation_period}</p>
          <p>Surface_water: {character.homeworld.surface_water}</p>
          <p>Terrain: {character.homeworld.terrain}</p>
        </div> 
        : 
        <></>
      }
    </div>
  )
}

export default Character
