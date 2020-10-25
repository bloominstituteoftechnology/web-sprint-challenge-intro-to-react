import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { Character } from "./Character";

export default function CharacterContainer() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log("response:", res.data.results);
        setState(res.data.results);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, []);

  return (
    <CardsWrapper>
      {state.map((character, id) => {
        return <Character key={id} character={character} />;
      })}
    </CardsWrapper>
  );
}

const CardsWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1%;
`;
