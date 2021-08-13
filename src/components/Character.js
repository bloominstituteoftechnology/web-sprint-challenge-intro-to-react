// Write your Character component here
import React, { useState } from 'react';
import Films from './Films';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export default function Character(props) {
    const [isOpen, setIsOpen ] = useState(false);
    const { info } = props;

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div>
                <h3>{info.name}</h3> 
                <Button 
                onClick={toggle} 
                style={{ margin: '1rem' }}>
                    {isOpen ? 'Close' : 'Open'}
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
                        <p>Skin Color: {info.skin_color}</p>
                        <p>Films</p>
                        { info.films.map(item => {
                            return <Films films={item} />
                        })
                        }
                    </CardBody>
                </Card>
            </Collapse>
       </> 
    )
}