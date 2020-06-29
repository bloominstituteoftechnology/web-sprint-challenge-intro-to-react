// Write your Character component here
import React, { useState, useEffect } from "react";
import Axios from "axios";
import CharacterInfo from "./CharacterInfo";

const Character = (props) => {
  const [ricknMortyData, setricknMortyData] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/")
      .then((response) => {
        console.log("response object", response);
        setricknMortyData(response.data.results);
      })
      .catch((error) => console.log("error object", error));
  }, []);

  return (
    <div className="character">
      {ricknMortyData.map((character) => {
        return (
          <CharacterInfo
            key={character.key}
            name={character.name}
            height={character.height}
            mass={character.mass}
          />
        );
      })}
    </div>
  );
};

export default Character;