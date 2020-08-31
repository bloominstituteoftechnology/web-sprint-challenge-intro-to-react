// Write your Character component here
import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card, ListGroup, ListGroupItem, Container, CardTitle } from 'reactstrap';




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
        <Container style={{backgroundColor: '#edd2a7', padding: '3%', display: 'flex', flexFlow: 'column wrap ', border: '2px solid #621b00', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', padding: '5%'}}>
            
            <CardTitle style={{fontSize: '2.0rem',  textShadow:'3px 3px 3px #ffffff', color: '#3d322c', textAlign: 'center'}} >{status}</CardTitle>
            
            <Button onClick={toggle} style={{ marginBottom: '2%', backgroundColor: '#f4a261', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>Learn More</Button>
            
            <Collapse
                isOpen={collapse}
                onEntering={onEntering}
                onEntered={onEntered}
                onExiting={onExiting}
                onExited={onExited}
            >
            <Card style={{padding: "3%", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            
            <CardTitle style={{textAlign: 'center', fontSize: '1.5rem', backgroundColor: '#8f7465', color: '#edd2a7',  textShadow:'1px 1px 4px #ffffff', padding: '1%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>{props.name}</CardTitle>
            
            <CardBody style={{backgroundColor: '#d4c883', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>

              <ListGroup style={{textAlign: 'center', color: '#6d4c3d'}}>

                <ListGroupItem> Birth Year: {props.birth_year}</ListGroupItem>
                <ListGroupItem>Gender: {props.gender}</ListGroupItem>
                <ListGroupItem>Hair color: {props.hair_color}
                </ListGroupItem>
                <ListGroupItem>Skin color: {props.skin_color}
                </ListGroupItem>
                <ListGroupItem>Eye Color: {props.eye_color}
                </ListGroupItem>
                <ListGroupItem>Mass: {props.mass}
                </ListGroupItem>
                <ListGroupItem>Height: {props.height}</ListGroupItem>

              </ListGroup>
            </CardBody>
            </Card>
        </Collapse>
    </Container>
        
    )
}


export default Character

