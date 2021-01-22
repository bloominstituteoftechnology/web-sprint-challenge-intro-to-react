// Write your Character component here
import React from "react";

export default function Character(props) {
  const [
    name,
    birthYear,
    gender,
    height,
    mass,
    eyeColor,
    hairColor,
    skinColor,
  ] = props;
  return (
    <div className="character-character container">
      <div className="character-info">
        <div>
          <h3>Name: {name}</h3>
          <p>BirthYear: {birthYear}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height}</p>
          <p>Mass: {mass}</p>
          <p>Eye Color: {eyeColor}</p>
          <p>Hair Color: {hairColor}</p>
          <p>Skin Color: {skinColor}</p>
        </div>
      </div>
    </div>
  );
}
