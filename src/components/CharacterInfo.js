import React, {useState} from 'react';
import {Card,CardTitle} from 'reactstrap';


const CharacterInfo = (props) => {
    // const [desc, setDesc] = useState('');
    return(
        <div>
            <Card>
            <CardTitle>{props.people.name}</CardTitle>
            </Card>
        </div>
    )
}

export default CharacterInfo;