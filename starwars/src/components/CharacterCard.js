import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
  Button,
} from "reactstrap";
//import "./CharacterCard.css";

const CharacterCard = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="title">{props.name}</CardTitle>
      </CardHeader>
      <CardBody>
        <br />
        <CardSubtitle className="subtitle">Birth Date</CardSubtitle>
        <CardText className="text">{props.birth}</CardText>
        <CardSubtitle className="subtitle">Height</CardSubtitle>
        <CardText className="text">{props.height}</CardText>
        <CardSubtitle className="subtitle">Weight</CardSubtitle>
        <CardText className="text">{props.mass}</CardText>
        <CardSubtitle className="subtitle">Hair Color</CardSubtitle>
        <CardText className="text">{props.hair}</CardText>
        <Button a href="https://www.starwars.com/" className="button">
          StarWars Website
        </Button>
      </CardBody>
    </Card>
  );
};
export default CharacterCard;
