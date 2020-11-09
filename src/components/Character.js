
import React, { useState } from 'react'
import styled from "styled-components";
import { Accordion, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;

.card{
    background-color: #0961AA;
    opacity: 0.75;
    font-family: Starwars;
    margin: 1%;
    width: 98%;  
}

.stats{
    font-size: 3rem;
    color: #DAAD40;
    text-shadow: 1px 1px 5px #404040;
    font-family: Star Jedi Hollow;
    cursor: pointer;
   
}
.cardBody{
    background-color: white;
    font-size: 3rem;
    
}

.title{
    font-family: Starwars;
    font-size: 5rem;
    opacity: 1;
    color: white;
    text-shadow: 1px 1px 5px #202121;
    
}
`
const Character = ({characterData}) => {
 const [open, setOpen] = useState(false);

 return(
     <Container>
     <Accordion defaultActiveKey="0">
         <Card className= "card">
                <Card.Title className="title"> {characterData.name}</Card.Title>
                <Accordion.Toggle className="stats" as={Card.Header} eventKey= "1"     onClick={() => setOpen(!open)}>
                ===StatS+++ {open ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey= "1">
                    <Card.Body className="cardBody" bg-transparent>
                        <p>Height: {characterData.height}</p>
                        <p>Hair Color: {characterData.hair_color}</p>
                        <p>Skin Color: {characterData.skin_color}</p>
                        <p>Eye Color: {characterData.eye_color}</p>
                        <p>Birth Year: {characterData.birth_year}</p>
                        <p>Gender: {characterData.gender}</p>
                        </Card.Body>
                </Accordion.Collapse>
         </Card>
     </Accordion>
     </Container >
 )
}
export default Character

