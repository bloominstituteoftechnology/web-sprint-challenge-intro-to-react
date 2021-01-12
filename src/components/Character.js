import React from 'react';
import styled from 'styled-components';


export default function Character(props){
    const { name, birthYear } = props;
    
    

    return (
           <SingleCharacter className='individual-character'>
                <p>{name}</p>
                <p>{birthYear}</p>
           </SingleCharacter>

    );
}


const SingleCharacter = styled.div`
    border: solid 5px;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    width: 500px;
    
`;
