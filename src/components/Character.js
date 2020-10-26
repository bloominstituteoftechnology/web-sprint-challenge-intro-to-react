// Write your Character component here
import React from "react";

const Character = (props) => {
  console.log(props);

  return (
    <div>
      <img src={props.character.image} alt={props.character.name} />
    </div>
  );
};

export default Character;
