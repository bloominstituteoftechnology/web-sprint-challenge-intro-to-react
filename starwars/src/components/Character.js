// Write your Character component here
import React from 'react';
import { Button} from 'reactstrap'


const Character = props => {
let {data} = props;
    return(
        <div>
            {data.map(starWars =>{
                return(
            <div>
                <Button  outline color = "primary"
                size="sm" block>
            <h3>Name:{starWars.name}</h3>
            <h3>Gender:{starWars.gender}</h3>
            <h3>Birth Year:{starWars.birth_year}</h3>
            </Button>{''}
        </div>


    )
})}
</div>
    )
}
export default Character;