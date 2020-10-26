import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <Container>
      <Row>
        {characters.map((character) => {
          return <CharacterCard passedInfo={character} key={character.key} />;
        })}
      </Row>
    </Container>
  );
}

export default CharacterList;
