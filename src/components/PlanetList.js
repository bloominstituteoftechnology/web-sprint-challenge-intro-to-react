import React from "react";

const PlanetList = (props) => {
  return (
    <>
      {props.error ? (
        <p>Error: {props.error}</p>
      ) : (
        <>
          <h2>{props.planetPost.name}</h2>
          <p>{props.planetPost.rotation_period}</p>
          <p>{props.planetPost.orbital_period}</p>
        </>
      )}
    </>
  );
};

export default PlanetList;
