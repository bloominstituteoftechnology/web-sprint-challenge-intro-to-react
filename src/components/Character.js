// Write your Character component here

import React from 'react';
import {Card, CardTitle, CardImg, Container, Row, Col, CardSubtitle} from 'reactstrap';

function Character(props){    
    return(
        <Container>
            <Row>
            {props.mydata.map((element) => {
               return(                   
                   <Col sm ='2'>
                   <Card key = {element.id}>
                        <CardImg width="80%" src = {element.image} alt = "Image is not available"/>
                        <CardTitle tag="h4">{element.name}</CardTitle>
                        <CardSubtitle tag="h5"> Species: {element.species} </CardSubtitle>
                        <CardSubtitle tag="h5"> Location: {element.location.name} </CardSubtitle>
                        <CardSubtitle tag="h6">{element.status}</CardSubtitle>                        
                    </Card>
                   </Col>                   
                );
            })};
            </Row>            
        </Container>
    );
};

export default Character;
