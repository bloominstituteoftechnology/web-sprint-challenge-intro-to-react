import React from 'react';
import styled from 'styled-components';


const Character = styled.div`
     opacity: 0.6;
     background: gray;
     border-radius: 5px;
     border: 3px double red;
     padding: 2em;
     margin: auto;
     text-shadow: 2px 1px whitesmoke;
     font-size: 1.3em;
    `;

const Title = styled.h2`
    color: #00004d;
`;

export default function Details(props)
{
    return (
        <Character style={{}}>
            <Title>Details of {props.info[0].name}</Title>
            <p>Born in year: {props.info[0].birth_year}</p>
            <p>Eye color: {props.info[0].eye_color}</p>
            <p>Hair color: {props.info[0].hair_color}</p>

            <button onClick={props.closeDetails}>Close</button>
        </Character>
    );
}