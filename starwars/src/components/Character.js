// Write your Character component here
import React, { useState, useEffect } from "react";
import Axios from "axios";
import CharacterInfo from "./CharacterInfo";

const Character = (props) => {
  const [starwarsData, setStarwarsData] = useState([]);

  useEffect(() => {
    Axios.get("https://swapi.py4e.com/api/people/")
      .then((response) => {
        console.log("response object", response);
        setStarwarsData(response.data.results);
      })
      .catch((error) => console.log("error object", error));
  }, []);

  return (
    <div className="character">
      {starwarsData.map((character) => {
        return (
          <CharacterInfo
            key={character.key}
            name={character.name}
            height={character.height}
            mass={character.mass}
            // films={character.films}
          />
        );
      })}
    </div>
  );
};

export default Character;
