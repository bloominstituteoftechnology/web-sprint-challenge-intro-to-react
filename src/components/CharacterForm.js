import React from "react";

const CharacterForm = (props) => {
  return (
    <>
      <p>CharacterForm {props.name}</p>
      <button onClick={props.getData}>Get Character </button>
    </>
  );
};

export default CharacterForm;
