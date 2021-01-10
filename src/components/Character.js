// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";
import { Container, Row } from "reactstrap";

const Character = () => {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log(res);
        setCharacter(res.data.results);
      })
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <Container className="star-wars-list">
      <Row>
        {character.map((data) => (
          <StarWarsCard key={data.name} data={data} />
        ))}
      </Row>
    </Container>
  );
};

export default Character;
