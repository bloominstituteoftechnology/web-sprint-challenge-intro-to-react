import React, {useState} from 'react';
import {Card,CardTitle,CardText} from 'reactstrap';
import styled from "styled-components";


const Container = styled.div`
    width: 50%;
    border: solid black 2px;
    border-radius: 25px;
    margin: 0 auto;
    background-image: url("https://media13.s-nbcnews.com/j/MSNBC/Components/Video/201911/tdy_sat_baby_yoda_191123_1920x1080.focal-760x428.jpg");
    background-size: cover;
    color: white;

`;

const Margin = styled.div`
    margin: 2%;
`;









const CharacterInfo = (props) => {
    // const [desc, setDesc] = useState('');
    return(
        <Margin> <div>
            <Container><Card>
            <CardTitle>{props.people.name}</CardTitle>
             <CardText>Birth Year: {props.people.birth_year}</CardText>
             <CardText>Height: {props.people.height}</CardText>
             <CardText>Hair color: {props.people.hair_color}</CardText>
            </Card></Container>
        </div></Margin>
    )
}

export default CharacterInfo;