/** @format */

import React, { useState, useEffect } from "react";
import Axios from "axios";
import CharacterStats from "./CharacterStats";

const Character = (props) => {
  const [characterData, setCharacterData] = useState([]);
  const array = array.from(characterData);

  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/1/")
      .then((response) => {
        console.log("Success", response);
        setCharacterData(response.data.results);
      })
      .catch((error) => console.log("Failure", error));
  }, []);

  return (
    <div className="character">
      {array.map((props) => {
        return (
          <CharacterStats
            key={props.key}
            name={props.name}
            height={props.height}
            mass={props.mass}
          />
        );
      })}
    </div>
  );
};

export default Character; // Write your Character component here
