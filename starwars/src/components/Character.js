// Write your Character component here
import React from "react";

const CharacterList = (props) => {
  return (
    <div className="film-list">
      
      <h2>Character Name: {props.name}</h2>
      <p>nothing</p>
      <div className="bottomContent">
        <li>Gender: {props.gender}</li>
        <li><p>Homeworld: {props.homeworld}</p></li>
      
      </div>
    </div>
  );
};

export default CharacterList;
