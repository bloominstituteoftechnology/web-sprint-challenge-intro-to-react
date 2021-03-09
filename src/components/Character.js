// Write your Character component here
// import { userSetter } from 'core-js/fn/symbol';
import React from 'react';
import StyledWars from './Styled.js'


const Character = props => {
    const { peopleData } = props
    
    return (
        <div className="profiles">

            {peopleData.map((data, index)=> (
                
                <StyledWars key={index}>
                    <h3>{data.name}</h3>
                    <p>{data.birth_year}</p>
                </StyledWars>
            ))}
        </div>
    )
}

export default Character