// Write your Character component here
import React, {useState} from "react";

import { Collapse, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';
import './character.css';

//Styles and animation below:
const Button = styled.button`
    display: inline-flex;
    flex-direction: row;
    align-items:center;
    margin: 2px 0 2px 0;
    justify-content:space-evenly;
    padding: 30px 30px;
    width: 70%;
    cursor: pointer;
    color: white;
    background: black;
    font-size: 18px;
    transition: transform 600ms ease-in-out;
 
    &:hover {
      transform: translate(200px, 150px) rotate(20deg) 
`;

const Character = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Char-list">

      <Button id="button" onClick={toggle}><div>Character Name: {props.name}</div><div id="birthyear">Birth: {props.birth}</div></Button>
      <Collapse isOpen={isOpen}>
        <Card>
      <CardBody className="cardbody">
        <li> Gender: {props.gender}</li>
        <li>Homeworld: {props.homeworld}</li>
        <li>Mass: {props.mass}</li> 
        <li>Skin-color: {props.skincolor}</li> 
        <li>Height: {props.height}</li> 
        <li>Homeworld: {props.homeworld}</li>  
        </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Character;
