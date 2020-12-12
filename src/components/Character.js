import React from 'react'
import Image from './Image'
import Body from './Body'
import Card from 'react-bootstrap/Card';


const Character = ({ data }) => {
    return (
        <Card bg="dark" border="dark" text='light'>
            <Image alt={ data.name } src={ data.image } />
            <Body data={data} />
        </Card>
    )
}

export default Character