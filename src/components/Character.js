// Write your Character component here
import React from "react";

export default function Character(props) {
  const character = props;
  return (
    <div className="character-character container">
      <div className="character-info">
        <div>
          <h1>Characters</h1>
          <h3>Name: {character.name}</h3>
          <p>BirthYear: {character.birthYear}</p>
          <p>Gender: {character.gender}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Eye Color: {character.eyeColor}</p>
          <p>Hair Color: {character.hairColor}</p>
          <p>Skin Color: {character.skinColor}</p>
        </div>
      </div>
    </div>
  );
}
