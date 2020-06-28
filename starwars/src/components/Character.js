// Write your Character component here
import React from "react";
import "../App.css";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 70px;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  border: solid black 3px;
  margin-bottom: 2%;
`;

export default function Character(props) {
  let card = props.characters.map((e) => {
    return (
      <Card className="card">
        <div>
          <H2>{e.name}</H2>
          <H2>{Math.round(e.height / 12)} LBS</H2>
        </div>
      </Card>
    );
  });

  console.log(props.characters);
  return (
    <div>
      <div>{card}</div>
    </div>
  );
}
