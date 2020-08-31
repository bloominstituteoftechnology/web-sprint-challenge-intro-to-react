// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setCharList(res.data.results);
        console.log(res.data.results);
        // console.log("This is the response:", res);
        // console.log("These are the characters: ", res.data.results);
      })
      .catch((err) => {
        console.log("There is an error: ", err);
      });
  }, []);

  return (
    <div>
      {charList.map((char) => {
        return (
          <CharacterCard
            char={char}
            name={char.name}
            image={char.image}
            status={char.status}
            origin={char.origin.name}
            species={char.species}
          />
        );
      })}
    </div>
  );
}
