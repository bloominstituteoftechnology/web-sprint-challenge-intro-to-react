// Write your Character component here
import React from "react";  
import {Card, CardTitle, CardSubtitle, Container, Row , Col} from 'reactstrap'
import styled from "styled-components";

const StyledDiv= styled.div`
font-family:'Syne Tactile', cursive;
`;
function Character(props){
console.log(props.characterArray, "props")
return(
<Container>
<Row>
                {props.characterArray.map((person) => {
                    return (
                        <Col xs='12'>
                            <Card key={person.id}>
                                <StyledDiv>Name</StyledDiv>
                                <CardTitle>{person.name}</CardTitle>
                                <StyledDiv>Status</StyledDiv>
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