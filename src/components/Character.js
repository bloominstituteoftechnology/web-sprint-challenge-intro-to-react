import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const Character = ({ data }) => {

    const colorConditional = data.status != 'unknown' ? data.status == 'Alive' ? 'success' : 'danger' : 'secondary';
    
    return (
        <Card bg="light" text='dark' border={colorConditional}>
        <Card.Img variant="top" src={ data.image } />
        <Card.Body>
            <Card.Title>
                { data.name } {" "}
                <Badge pill variant={colorConditional}>{ data.status }</Badge>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
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