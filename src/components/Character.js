// Write your Character component here

import React from "react";
fetch("https://rickandmortyapi.com/api/character/?page=1")
  .then((response) => response.json())
  .then((data) => console.log(data));

function Character() {
  return <div></div>;
}

export default Character;
