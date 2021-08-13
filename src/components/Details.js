import React from 'react';
import styled from 'styled-components';

export default function Details(props)
{
    const Container = styled.div` 
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10% 10% 10% 10%;
        padding: 8px;
        background-color: rgba(255,222,173,.3);
        color: #0077b6;
        
        span{
            display: inline-block;
            vertical-align: middle;
            padding: 10px;
        }
    `;

    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #0077b6;
        color: #0077b6;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `;

    return (
        <Container>
            <h2>Details of {props.info[0].name}</h2>
            <p>Born in year: {props.info[0].birth_year}</p>
            <p>Eye color: {props.info[0].eye_color}</p>
            <p>Hair color: {props.info[0].hair_color}</p>

            <Button onClick={props.closeDetails}>Close Details</Button>
        </Container>
    );

}