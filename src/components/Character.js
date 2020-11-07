// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardImg, CardText } from 'reactstrap';

const Character = (props) => {
    const {variationName, variationImage} = props;

    return (
        <StyledCharacterContainer>
        <div className='character-div'>
            <Card>
            <CardImg bottom width='50%' src={variationImage} alt='variation of character' />
            <CardTitle tag='h2'> {variationName} </CardTitle>
            </Card> 
        </div>
    </StyledCharacterContainer>
    );
};


const StyledCharacterContainer  = styled.div`
    /* border: #F4F6F6 solid 1px;
    background-color: #F8F9F6;
    width: 35%;
    padding: 10px;
    margin: 10px;
    : hover{
        background-color: #FDF2E9;} */

`


export default Character;