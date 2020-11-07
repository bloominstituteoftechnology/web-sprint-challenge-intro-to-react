import React, {useState} from 'react';
import Character from './Character'
import styled from 'styled-components'

const Characters = (props) => {
    const {variations} = props
    console.log(variations)
    

    return (
        <StyledCharacters className='characters-container'>              
            {variations.map(variation => {
                return <Character key={variation.id} variationImage={variation.image} variationName = {variation.name}/>
            })}
        </StyledCharacters>
    );
};


const StyledCharacters = styled.div`
display: flex;
border: red solid 5px;
flex-flow: row wrap;
justify-content: center;
`





export default Characters;