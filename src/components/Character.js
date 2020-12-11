import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const Character = ({ data }) => {

    const colorConditional = data.status != 'unknown' ? data.status == 'Alive' ? 'success' : 'danger' : 'secondary';
    
    return (
        <Card border={colorConditional}>
        <Card.Img variant="top" src={ data.image } />
        <Card.Body>
            <Card.Title>
                { data.name } {" "}
                <Badge pill variant={colorConditional}>{ data.status }</Badge>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{ data.species }</Card.Subtitle>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        </Card>



    )
}

export default Character