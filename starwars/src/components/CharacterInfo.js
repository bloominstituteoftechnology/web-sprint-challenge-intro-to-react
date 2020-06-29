import React from "react";

const CharacterInfo = (props) => {
  console.log(CharacterInfo);
  return (
    <div className="character-info">
      <h2>Name: {props.name}</h2>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
    </div>
  );
};

export default CharacterInfo;