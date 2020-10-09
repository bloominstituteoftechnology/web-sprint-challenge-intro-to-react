// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '../App.css';

export default function Character({ height, name, mass, hair_color }) {

    if (!name) {
        return (
            <div>loading</div>
        )
    }

    // All element styles
    const Heading = styled.h2`
    font-weight:bold;
    font-size:${pr => pr.theme.titleSize}
    `

    const Container = styled.div`
    font-family: ${pr=> pr.theme.font};
    font-size: ${pr=> pr.theme.size};
    display:flex;
    justify-content: center;
    background: ${pr=>pr.theme.background};
    margin: 1% 0;
    align-content:center;
    align-items:center;
    `

    const List = styled.ul`
    list-style-type: none;
    margin:0;
    padding:0 3%;
    text-align:left;
    `

    /* Return object containing all the properties */
    return (
        
        <Container>
            <Heading>{name}</Heading>
            <List>
                <li>Mass: {mass}</li>
                <li>Height: {height}</li>
                <li>Hair color: {hair_color}</li>
            </List>
        </Container>
    )
}