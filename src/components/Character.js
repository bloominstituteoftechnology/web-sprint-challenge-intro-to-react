// Write your Character component here
import React, { useState } from 'react';
import Films from './Films';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';

export default function Character(props) {
    const [isOpen, setIsOpen ] = useState(false);
    const { info } = props;

    const toggleInfo = () => setIsOpen(!isOpen);

    const CardBody = styled.div`
        padding: 10px;
        color: white;
        background-size: cover;
        background-image: url(https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg);
    `

    return (
        <>
            <div>
                <h3>{info.name}</h3> 
                <Button 
                onClick={toggleInfo} 
                style={{ margin: '1rem' }}>
                    {isOpen ? 'Close' : 'Show Info'}
                </Button>
            </div>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p>Birth Year: {info.birth_year}</p>
                        <p>Gender: {info.gender}</p>
                        <p>Eye Color: {info.eye_color}</p>
                        <p>Hair Color: {info.hair_color}</p>
                        <p>Mass: {info.mass}</p>
                        <p>Height: {info.height}</p>
                        <p>Film Debuts:</p>
                            { info.films.map((item, index) => {
                                return <Films films={item} key={index} />
                                })
                            }
                    </CardBody>
                </Card>
            </Collapse>
       </> 
    )
}