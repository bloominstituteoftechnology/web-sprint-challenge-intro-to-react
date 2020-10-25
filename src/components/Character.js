import React from "react";
import styled from "styled-components";

export function Character(props) {
  return (
    <Card>
      <h1>
        <span>Name: </span> {props.character.name}
      </h1>
      <h3>
        <span className="birth">DOB: </span>
        {props.character.birth_year}
      </h3>
      <h2>
        <span>Gender: </span> {props.character.gender}
      </h2>
      <h2>
        <span className="height">Height: </span> {props.character.height}
      </h2>
      <h2>
        <span className="hair">Hair Color: </span> {props.character.hair_color}
      </h2>
    </Card>
  );
}

const Card = styled.div`
  width: 22%;
  height: 22rem;
  margin: 1%;
  background: gray;
  border: 0.2rem solid black;
  border-radius: 0.5rem;
  color: White;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2rem;
    padding: 1%;
    font-family: "Turret Road", cursive;
    -webkit-text-stroke: 1px black;
    span {
      color: Red;
    }
  }
  h2 {
    font-size: 1.4rem;
    padding: 1%;
    font-family: "Turret Road", cursive;
    -webkit-text-stroke: 1px black;
    span {
      color: Red;
    }
    .height {
      color: Red;
    }

    .hair {
      color: Red;
    }
  }
  h3 {
    padding-left: 1%;
    font-size: 1.4rem;
    color: white;
    font-family: "Turret Road", cursive;
    -webkit-text-stroke: 1px black;
  }
  .birth {
    color: Red;
    -webkit-text-stroke: 1px black;
  }
`;
