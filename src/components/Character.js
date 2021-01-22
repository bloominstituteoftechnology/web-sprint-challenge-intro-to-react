// Write your Character component here
import React from "react";
export default function Character(props) {
  const { character } = props;

  return (
    <div className="character-character container">
      <div className="character-info">
        <div>
          <h3>Name: {character.name}</h3>
          <p>BirthYear: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Skin Color: {character.skin_color}</p>
        </div>
      </div>
    </div>
  );
}
