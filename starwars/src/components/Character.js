// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";

const Character = () => {
  //declaring state
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people")
      .then((response) => {
        // reference setState function
        console.log(response);
        setCharacter(response.data.results);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div className="character">
      {character.map((character) => (
        <CharacterCard
          className="card"
          key={character.id}
          name={character.name}
          birth={character.birth_year}
          height={character.height}
          mass={character.mass}
          hair={character.hair_color}
          home={character.homeworld}
        />
      ))}
    </div>
  );
};

export default Character;
