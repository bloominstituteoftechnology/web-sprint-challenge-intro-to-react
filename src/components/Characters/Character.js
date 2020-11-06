// Write your Character component here
import React from 'react'
import Details from '../Details/Details'
import styled from "styled-components";

const Character = (props) => {
    const { characterToggled, character } = props;

    const expandSign = styled.div`
    div{
        color: red;
    }
    
    `;

    return (
        <div className='characterWrapper'>
            <div className="characterName">{character.name}</div>
            <expandSign onClick={() => characterToggled(character.id)}>+</expandSign>
            <Details character={character} />
        </div>
    );
};


export default Character;