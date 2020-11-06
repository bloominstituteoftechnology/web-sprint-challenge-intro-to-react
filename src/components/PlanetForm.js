import React from "react";

const PlanetForm = (props) => {
  return (
    <>
      {props.load ? (
        <p>Loading Planets</p>
      ) : (
        <button onClick={props.getData}>Get Planet </button>
      )}
    </>
  );
};

export default PlanetForm;
