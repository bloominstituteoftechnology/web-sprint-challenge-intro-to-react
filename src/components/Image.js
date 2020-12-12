import React from 'react'
import Card from 'react-bootstrap/Card';

const Image = props => {
    return (
        <Card.Img variant="top" alt={props.alt} src={props.src} />
    )
}

export default Image
