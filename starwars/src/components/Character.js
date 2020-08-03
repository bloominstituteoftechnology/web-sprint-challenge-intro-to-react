// Write your Character component here
import React, {useState} from "react";
import styled from "styled-components";
import { Collapse, Button, CardBody, Card, Col, CardTitle, CardText, Badge, ListGroup, ListGroupItem  } from 'reactstrap';

const  StarWarsButton =styled.button `
  width: 300px;
  height: 30px;
  background: ${props => (props.primary ? "brown" : "red")}; 
  color:white;
  border: 0;
  margin: 5px 10px;
  border-radius:12px;
`
 const StarWarsCardBody = styled.div `
 background:antiquewhite;
 `
//  const StarWarsCard = styled.div`
//   background:antiquewhite;
//   `


function Character(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


return (

  <div>
  <StarWarsButton primary onClick={toggle} style={{ marginBottom: '1rem' }}>{props.name}</StarWarsButton>
  <Collapse isOpen={isOpen}>
    <Card>
      <StarWarsCardBody>
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

      
      </StarWarsCardBody>
    </Card>
  </Collapse>
</div> 

)

    
}

export default Character;
