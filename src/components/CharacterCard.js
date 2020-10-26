import React from "react";
import "./card.css";

const CharacterCard = (props) => {
  console.log(props.character);
  return (
    <div className="wrapper">
      <div className="card">
        <div className="img-section">
          <img src={props.passedInfo.image} />
          <h2>{props.passedInfo.name}</h2>
        </div>
        <div className="card-info">
          <h3>Status: {props.passedInfo.status}</h3>
          <p>Species: {props.passedInfo.species}</p>
          <p>Gender: {props.passedInfo.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
