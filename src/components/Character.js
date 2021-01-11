// Write your Character component here
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Character = (props) => {
  const { name, gender, by, height, weight } = props;

  const CardStyles = styled.div`
    color: tomato;
    margin: 2px;
    cursor: default;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 0px 10px;
    }
  `;

  return (
    <div>
      <CardStyles>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {gender}, {by}, {height}cm, {weight}kg
            </CardSubtitle>
          </CardBody>
        </Card>
      </CardStyles>
    </div>
  );
};

export default Character;
