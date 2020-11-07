import React, {useState} from 'react';
import { Button } from 'reactstrap'

const Filters = (props) => {
    const {showRick, showMorty, showEveryone} = props;



    return (
        <div className='buttons-container'>
            <Button color= 'danger' onClick={showRick}> Show me The Ricks! </Button>
            <button className='filter-button'onClick={showMorty}> Show me The Mortys! </button>
            <button className='filter-button'onClick={showEveryone}> Show me Everyone! </button>
        </div>
        ) 
}






export default Filters;