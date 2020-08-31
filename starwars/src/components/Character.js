// Write your Character component here
import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap';



const Character = (props) => {
    console.log(props, "Character Props");
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState([props.name]);
  
    const onEntering = () => setStatus('Loading...');
  
    const onEntered = () => setStatus('');
  
    const onExiting = () => setStatus('Loading...');
  
    const onExited = () => setStatus([props.name]);
  
    const toggle = () => setCollapse(!collapse);
    return (
        <div>
           <Button color="danger" onClick={toggle} style={{ marginBottom: '1rem' }}>Open</Button>
            <h5>{status}</h5>
            <Collapse
            isOpen={collapse}
            onEntering={onEntering}
            onEntered={onEntered}
            onExiting={onExiting}
            onExited={onExited}
      >
        <Container>
        
        <Card style={{marginBottom: "1rem"}, {padding: "1rem"}}>
           <h5>{props.name}</h5>  
            <CardBody>
              <ListGroup>
                <ListGroupItem>{props.birth_year}</ListGroupItem>
                <ListGroupItem>{props.gender}</ListGroupItem>
                <ListGroupItem>{props.hair_color}</ListGroupItem>
                <ListGroupItem>{props.skin_color}</ListGroupItem>
                <ListGroupItem>{props.eye_color}</ListGroupItem>
                <ListGroupItem>{props.mass}</ListGroupItem>
                <ListGroupItem>{props.height}</ListGroupItem>
              </ListGroup>
             
              
            </CardBody>
            
        </Card>
        
        
        </Container>
        </Collapse>
        </div>
        
    )
}


export default Character

