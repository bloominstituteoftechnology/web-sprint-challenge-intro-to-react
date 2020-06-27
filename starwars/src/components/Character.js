// Write your Character component here
import React from "react";

const CharacterList = (props) => {
  return (
    <div className="film-list">
      <h2>Film Title: {name}</h2>
      <p>nothing</p>
      <div className="bottomContent">
        <p>Director: {gender}</p>
        <p>Release Date: {homeworld}</p>
      </div>
    </div>
  );
};

export default CharacterList;
