import React from 'react'
import Image from './Image'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const Character = ({ data }) => {

    const colorConditional = data.status !== 'unknown' ? data.status === 'Alive' ? 'success' : 'danger' : 'secondary';

    return (
        <Card bg="dark" border="dark" text='light'>
        <Image alt={ data.name } src={ data.image } />
        <Card.Body>
            <Card.Title>
                { data.name } {" "}
                <Badge pill variant={colorConditional}>{ data.status }</Badge>
            </Card.Title>
            <Card.Subtitle className="mb-2">
                { data.type ? data.type : data.species }
            </Card.Subtitle>
            <Card.Text>Last known location:</Card.Text>
            <Card.Link href="#">{ data.location.name }</Card.Link>
            <Card.Text>First seen in:</Card.Text>
            <Card.Link href="#">{ data.origin.name }</Card.Link>
        </Card.Body>
        </Card>
    )
}

export default Character