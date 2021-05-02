// Write your Character component here
import React, { useEffect } from 'react';
import { BASE_URL } from '../App.js';
import StyleWars from './Styled.js'



const Character = props => {
    const { peopleData } = props

    return (
        <div className="characters">

            {peopleData.map((data, index) => (
                <StyleWars key={index}>
                    <h3>{data.name}</h3>
                    <p>{data.birth_year}</p>
                </StyleWars>
            ))}
        </div>
    )
    
}

export default Character;
