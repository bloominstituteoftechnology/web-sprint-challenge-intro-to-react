// Write your Character component here
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  CardText,
} from 'reactstrap';

//

function Character(props) {
  return (
    <Card>
      {props.characterArray.map((Character) => {
        return (
          <Card key={Character.created}>
            <CardHeader>{Character.name}</CardHeader>
            <CardTitle>{Character.model}</CardTitle>
            <CardBody>
              <CardText>{Character.manufacturer}</CardText>
              <Button>{Character.length}</Button>
            </CardBody>
          </Card>
        );
      })}
    </Card>
  );
}
export default Character;
