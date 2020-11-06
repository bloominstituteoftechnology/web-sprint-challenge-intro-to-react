import React from "react";
import Style from "styled-components";

const Styles = Style.div`{
  color:${(pr) => pr.theme.color};
  background-color:${(pr) => pr.theme.backgroundColor};
  flex-direction:${(pr) => pr.theme.flex};
  align-items:${(pr) => pr.theme.alignItems};
  justify-content:${(pr) => pr.theme.justifyContent};
}`;

const PlanetList = (props) => {
  return (
    <Styles>
      {props.error ? (
        <p>Error: {props.error}</p>
      ) : (
        <>
          <h2>Planet Name:{props.planetPost.name}</h2>
          <p>Planet Rotation Period: {props.planetPost.rotation_period}</p>
          <p>Planet Orbital Period:{props.planetPost.orbital_period}</p>
          <p>Terrain: {props.planetPost.terrain}</p>
        </>
      )}
    </Styles>
  );
};

export default PlanetList;
