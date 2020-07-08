import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

const Character = props => {
let {data} = props;
    return(
        <div>
            {data.map(ricknMorty =>{
                return(
            <div>
                <Card>
                    <CardBody>
                    <CardImg top width="100%" src={ricknMorty.image} alt="Card image cap" />
                    <CardTitle>Name: {ricknMorty.name}</CardTitle>
                    <CardText>Gender: {ricknMorty.gender}</CardText>
                    <CardText>Status: {ricknMorty.status}</CardText>
                    </CardBody>
                </Card>
        </div>


    )
})}
</div>
    )
}
export default Character;