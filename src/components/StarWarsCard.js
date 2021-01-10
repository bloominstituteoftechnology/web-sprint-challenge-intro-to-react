import React from "react";
// import styled from "styled-components";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
} from "reactstrap";

// const WrapperDiv = styled.div`
//   font-family: sans-seriff;
//   text-align: center;
// `;

const StarWarsCard = (props) => {
  return (
    <WrapperDiv>
      <Col xs="6" md="4" xl="3">
        <Card>
          <CardBody className="card-text">
            <CardTitle>NAME: {props.data.name}</CardTitle>
            <CardSubtitle>CREATED: {props.data.created}</CardSubtitle>
            <CardText> SPECIES: {props.data.species} </CardText>
          </CardBody>
        </Card>
      </Col>
    </WrapperDiv>
  );
};

export default StarWarsCard;
