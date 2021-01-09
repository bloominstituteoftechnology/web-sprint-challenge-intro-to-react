import React from 'react';
import styled from 'styled-components';


export default function Character(props){
    const { name, birthYear } = props;
    
    

    return (
        <div className='character-card'>
           <SingleCharacter className='individual-character'>
                <p>{name} - {birthYear}</p>
           </SingleCharacter>
        </div>

    );
}


const SingleCharacter = styled.div`
    border: solid 5px;
    
`;
