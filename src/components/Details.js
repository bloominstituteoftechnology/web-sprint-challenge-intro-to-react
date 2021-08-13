import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Details(props)
{
    return (
        <div>
            <h2>Details of {props.info[0].name}</h2>
            <p>Born in year: {props.info[0].birth_year}</p>
            <p>Eye color: {props.info[0].eye_color}</p>
            <p>Hair color: {props.info[0].hair_color}</p>

            <button onClick={props.closeDetails}>Close</button>
        </div>
    );
}