// Write your Character component here
import React, {useState} from 'react';

const Character = (props) => {
    const {variationName, variationImage} = props;



    return (
    <div className ='variation-container'>
        <span className='variation-name'>{variationName}</span>
        <br></br>
        <img className='variation-image' src={variationImage} alt='vraition of character'/>
    </div>
    );
};






export default Character;