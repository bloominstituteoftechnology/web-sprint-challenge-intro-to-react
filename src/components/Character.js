import React, { useState } from 'react';
import Films from './Films';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';

export default function Character(props) {
    const [isOpen, setIsOpen ] = useState(false);
    const { info } = props;

    const toggleInfo = () => setIsOpen(!isOpen);

    const StyledName = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 50px;
    `

    const CardBody = styled.div`
        padding: 20px;
        color: white;
        background-size: cover;
        background-image: url(https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-25.jpg);
    `

    const StyledSpan = styled.span`
        text-decoration: underline;
    `

    return (
        <>
            <StyledName>
                <div>
                <h3>*{info.name}</h3> 
                </div>
                <div>
                <Button onClick={toggleInfo} >
                    {isOpen ? 'Close' : 'Show Info'}
                </Button>
                </div>
            </StyledName>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p>Birth Year: {info.birth_year}</p>
                        <p>Gender: {info.gender}</p>
                        <p>Eye Color: {info.eye_color}</p>
                        <p>Hair Color: {info.hair_color}</p>
                        <p>Mass: {info.mass}</p>
                        <p>Height: {info.height}</p>
                        <p><StyledSpan>Film Debuts</StyledSpan></p>
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