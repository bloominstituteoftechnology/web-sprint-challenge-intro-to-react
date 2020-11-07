import React, {useState} from 'react';
import { Button } from 'reactstrap';
import styled from 'styled-components'

const Filters = (props) => {
    const {showRick, showMorty, showEveryone} = props;



    return (
        <div>
            <Button color= 'primary' onClick={showRick}> Show me alternate Ricks! </Button>{'  '}
            <Button color='primary' onClick={showMorty}> Show me alternate Mortys! </Button>{'  '}
            <Button color='primary' onClick={showEveryone}> Show me all characters! </Button>{'  '}
        </div>
        ); 
}






export default Filters;