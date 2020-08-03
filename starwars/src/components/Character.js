/** @format */

import React from "react";

const Characters = (props) => {
  return (
    <li className="character.info">
      <h2>Name: {props.name}</h2>
      <p>Mass: {props.mass}</p>
      <p>Height: {props.height}</p>
      <p>Gender: {props.gender}</p>
      <p>Eye color: {props.eye_color}</p>
      <p>Birth year{props.birth_year}</p>
    </li>
  );
};

export default Characters; // Write your Character component here
