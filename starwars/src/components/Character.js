// Write your Character component here
import React, {useState} from "react";
import { Collapse, Button, CardBody, Card, Col, CardTitle, CardText, Badge, ListGroup, ListGroupItem  } from 'reactstrap';



function Character(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


return (

  <div>
  <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.name}</Button>
  <Collapse isOpen={isOpen}>
    <Card>
      <CardBody>
      <CardTitle></CardTitle>
      <h1>{props.title}</h1>
      <CardText> </CardText>
      <ListGroup flush>
      <ListGroupItem disabled tag="a" href="#">{"Birth_year:" +  props.birth_year}</ListGroupItem>
      <ListGroupItem disabled tag="a" href="#">{"Gender:" + props.gender}</ListGroupItem>
      <ListGroupItem disabled tag="a" href="#">{"Eye_color:" + props.eye_color} </ListGroupItem>
      <ListGroupItem disabled tag="a" href="#">{"Height:" + props.height}</ListGroupItem>
      <ListGroupItem disabled tag="a" href="#">{"Mass:" + props.mass}</ListGroupItem>
    </ListGroup>

      
      </CardBody>
    </Card>
  </Collapse>
</div> 

)

    
}

export default Character;
