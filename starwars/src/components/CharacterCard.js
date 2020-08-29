import React from "react";

const CharacterCard = ({ char }) => {
  return (
    <div>
      <h2>{char.name}</h2>
      <p>Status: {char.status}</p>
      <p>Gender: {char.gender}</p>
      <p>Species: {char.species}</p>
    </div>
  );
};

export default CharacterCard;
