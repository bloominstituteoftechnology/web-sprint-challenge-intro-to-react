// Write your Character component here
// birth_year, eye_color, gender, hair_color, height, mass, name, skin_color
import React, {useState} from 'react';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const WrapperDiv = styled.div `
margin: 10px;
`;
function Character(props){
    const {data } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return(
        <WrapperDiv>
            <Button outline color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}  size="lg" block>{data.name}</Button>
            <Collapse isOpen={isOpen}>
                <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardBody>
                    <h2>Birthyear: {data.birth_year}</h2>
                    <h2>Gender: {data.gender}</h2>
                    <h2>Hair Color: {data.hair_color}</h2>
                    <h2>Eye Color: {data.eye_color}</h2>
                    <h2>Skin Color: {data.skin_color}</h2>
                    <h2>Mass: {data.mass}</h2>
                    <h2>Height: {data.height}</h2>
                </CardBody>
                </Card>
            </Collapse>
        </WrapperDiv>
    )
}   

export default Character;