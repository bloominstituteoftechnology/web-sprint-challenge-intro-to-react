// Write your Character component here
import React from "react";  
import {Card, CardTitle, CardSubtitle, Container, Row , Col} from 'reactstrap'
import styled from "styled-components";

function Character(props){
console.log(props.characterArray, "props")
return(
<Container>
<Row>
                {props.characterArray.map((person) => {
                    return (
                        <Col xs='12'>
                            <Card key={person.id}>
                                <div>Name</div>
                                <CardTitle>{person.name}</CardTitle>
                                <div>Status</div>
                                <CardSubtitle>{person.species}</CardSubtitle>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
</Container>
)
}



















export default Character;