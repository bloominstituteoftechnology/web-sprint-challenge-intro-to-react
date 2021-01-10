// Write your Character component here
import React from "react";

const Character = (props) => {
  const { name } = props;

  return (
    <div>
      <h1>Character: {name}</h1>
    </div>
  );
};

export default Character;
