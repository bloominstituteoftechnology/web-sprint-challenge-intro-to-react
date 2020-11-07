import React, {useState} from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components'

const Filters = (props) => {
    const {showRick, showMorty, showEveryone} = props;



    return (
        <div>
            <Button color= 'primary' onClick={showRick}> Show me The Ricks! </Button>{' '}
            <button className='filter-button'onClick={showMorty}> Show me The Mortys! </button>
            <button className='filter-button'onClick={showEveryone}> Show me Everyone! </button>
        </div>
        ); 
};






export default Filters;