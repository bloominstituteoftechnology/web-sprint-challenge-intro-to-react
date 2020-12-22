// Write your Character component here
import React from "react";
import style from "styled-components";
import Characters from "./characters"

export default function CharacterCards(props) {
  const { characters } = props;
 console.log(props)
  return (
    <div className="text-center">
      <img src="" alt="" />
      <h1>{characters.name}</h1>
      <div>
        <h2>{characters.id}</h2>
      </div>
      <div>
        <p> {characters.species}</p>
        <p> {characters.url}</p>
        <p> {characters.type}</p>
        <p> {characters.status}</p>
      </div>
    </div>
  );
}
