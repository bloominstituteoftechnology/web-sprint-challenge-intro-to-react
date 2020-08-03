import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
}  from 'reactstrap';


//https://rickandmortyapi.com/api/character/1,
function Characters(props) {
    return(
        <div>
        <Card>
          <CardImg top width="100%" src={props.url}alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.location}</CardSubtitle>
            <CardText>WANTED DEAD OR ALIVE</CardText>
          </CardBody>
        </Card>
      </div>
    );
}

export default Characters;