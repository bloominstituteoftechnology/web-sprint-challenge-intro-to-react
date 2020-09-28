// Write your Character component here
import React from 'react';
import {Card,CardTitle} from 'reactstrap'


const Character = (props) => {
    return(
        <div>
            <Card>
            <CardTitle>{props.data.results}</CardTitle>
            </Card>
        </div>
    )
}

export default Character