import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  color: red;
`;
const Create = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;
const Climate = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;
const Diameter = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;
const Edite = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;
const Gravity = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;
const Population = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;
const Rotation = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;
const Surface = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;
const Terrain = styled.h3`
  color: #fc4e03;
  &:hover {
    color: white;
  }
`;

const ProjectCard = (props) => {
  return (
    <>
      <Name>{props.name}</Name>
      <Create>{props.created}</Create>
      <Climate>{props.climate}</Climate>
      <Diameter>{props.diameter}</Diameter>
      <Edite>{props.edited}</Edite>
      <Gravity>{props.gravity}</Gravity>
      <Population>{props.population}</Population>
      <Rotation>{props.rotation}</Rotation>
      <Surface>{props.surface}</Surface>
      <Terrain>{props.terrain}</Terrain>
    </>
  );
};
export default ProjectCard;
