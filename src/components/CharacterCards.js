import React from "react";
import style from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export default function CharacterCards(props) {
  const { character } = props;
  //  console.log(characters)
  return (
    <div className="card">
      <h4>{character.name}</h4>
      <div>
        <h5>{character.id}</h5>
      </div>
      <div>
        <div className="cardtext"> </div>
        <div>
          <p> {character.species}</p>
        </div>
        <div>
          {" "}
          <p> {character.url}</p>
        </div>
        <div>
          {" "}
          <p> {character.type}</p>
        </div>
        <div>
          <p> {character.status}</p>
        </div>
        <div>
        <button>Click Me!</button>
        </div>
      </div>
    </div>
  );
}
