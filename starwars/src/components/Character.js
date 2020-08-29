// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CharacterList() {
  const [charList, setCharList] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        setCharList(res.data.results);
        console.log(charList);
        // console.log("This is the response:", res);
        // console.log("These are the characters: ", res.data.results);
      })
      .catch((err) => {
        console.log("There is an error: ", err);
      });
  }, []);
}
