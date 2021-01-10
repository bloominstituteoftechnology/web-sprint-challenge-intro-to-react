import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";

const StarWarsCard = (props) => {
  return (
    <Col xs="6" md="4" xl="3">
      <Card>
        <CardBody className="card-text">
          <CardTitle>NAME: {props.data.name}</CardTitle>
          <CardSubtitle>CREATED: {props.data.created}</CardSubtitle>
          <CardText> SPECIES: {props.data.species} </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StarWarsCard;
