import React from "react";

const PlanetForm = (props) => {
  return (
    <>
      <p>PlanetForm {props.name}</p>
      <button onClick={props.getData}>Get Planet </button>
    </>
  );
};

export default PlanetForm;
