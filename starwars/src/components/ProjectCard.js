import React from "react";
import styled from "styled-components";
import { Toast, ToastBody, ToastHeader,Spinner  } from 'reactstrap';

const Name = styled.h1`
  color: red;
`;
const Create = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;
const Climate = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;
const Diameter = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;
const Edite = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;
const Gravity = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;
const Population = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;
const Rotation = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;
const Surface = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;
const Terrain = styled.ul`
  color: #fc4e03;
  &:hover {
    color: #ebc334;
  }
`;

const Body = styled.div`
display: flex;
align-items: center;
justify-content: left;
text-align: left;
 `


const ProjectCard = (props) => {
  return (
    <Body>
    <Toast>
    <ToastHeader icon={<Spinner size="sm" />}>
      <Name>{props.name}</Name>
      </ToastHeader>
      <ToastBody>
      <Create>Created : {props.created}</Create>
      <Climate>Climate : {props.climate}</Climate>
      <Diameter> Diameter: {props.diameter}</Diameter>
      <Edite>Edeted : {props.edited}</Edite>
      <Gravity>Gravity : {props.gravity}</Gravity>
      <Population>Population : {props.population}</Population>
      <Rotation>Rotation : {props.rotation}</Rotation>
      <Surface> Surface : {props.surface}</Surface>
      <Terrain> Terrain : {props.terrain}</Terrain>
      </ToastBody>
      </Toast>
    </Body>
  );
};
export default ProjectCard;
