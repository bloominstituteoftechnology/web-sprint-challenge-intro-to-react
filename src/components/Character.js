// Write your Character component here
import React from "react";

const Character = ({ character }) => {
//   const { character } = props;
console.log({character})

  return(
      <div>
        <div>{character.name}</div>
        <p>{character.birth_year}</p>
        <p></p>
      </div>
    );
};

export default Character;
