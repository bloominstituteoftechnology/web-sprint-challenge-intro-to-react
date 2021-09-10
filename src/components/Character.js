// Write your Character component here
import React from 'react';

const Character = props => {
    const {name, info} = props;

    //console.log(name);

    return(
        <div className='characterName'>{info}
            <span name={name}> {name} </span>
        </div>
        );    
};

export default Character;