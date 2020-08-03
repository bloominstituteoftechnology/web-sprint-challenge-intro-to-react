// Write your Character component here

import React from 'react';
import {Card, CardTitle,CardImg,Container,Row,Col,Alert} from 'reactstrap';


function Character(props){
    console.log(props,'These are you props')
    return(
        <div>
            <Row>
         {props.characterArray.map((character) => {
            return(
                
                <Col xs ='3'>
                <Card key={character.created}>
                       <CardImg src={character.image}/>
                       <Alert color ="warning">
                       <CardTitle>{character.name}</CardTitle>
                       </Alert>
                </Card>
                </Col>
            )
         })}
         </Row>
        </div>
    )
}
export default Character;