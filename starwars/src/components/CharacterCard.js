import React from "react";

const CharacterCard = ({ char }) => {
  return (
    <div>
      <h2>Character Name: {char.name}</h2>
      <p>Status: {char.status}</p>
    </div>
  );
};

export default CharacterCard;
