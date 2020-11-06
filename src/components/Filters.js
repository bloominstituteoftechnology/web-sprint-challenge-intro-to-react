import React, {useState} from 'react';

const Filters = (props) => {
    const {showRick, showMorty} = props;



    return (
        <div className='buttons-container'>
            <button className='show-rick-button' onClick={showRick}> Show me The Ricks! </button>
            <button className='show-morty-button'onClick={showMorty}> Show me The Mortys! </button>
        </div>
        ) 
}






export default Filters;