// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const {variationName, variationImage} = props;



    return (
    <StyledCharacter className ='variation-container'>
        <div className='variation-name'>{variationName}</div>
        <br></br>
        <img className='variation-image' src={variationImage} alt='vraition of character'/>
    </StyledCharacter>
    );
};


const StyledCharacter  = styled.div`
color: red;
border: blue dashed 2px;
width: 45%
display: flex;
padding: 20px;
`



export default Character;