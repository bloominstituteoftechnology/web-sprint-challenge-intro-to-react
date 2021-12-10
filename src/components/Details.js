import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Details(props)
{
    const [homeworld, setHomeworld] = useState(null);

    useEffect(() =>
    {
        console.log(props.info[0].homeworld);
        console.log("Fetching the homeworld...");
        axios.get(`${props.info[0].homeworld}`)
            .then(response =>
            {
                console.log(response.data);
                setHomeworld(response.data);
            })
            .catch(err =>
            {
                console.error(err);
            });
    }, []);

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

    const HomeworldContainer = styled.div`
        padding: 8px;
        background-color: rgba(127, 85, 57,.3);
        color: #0077b6;
    `;

    return (
        <Container>
            <h2>Details of {props.info[0].name}</h2>
            <p>Born in year: {props.info[0].birth_year}</p>
            <p>Eye color: {props.info[0].eye_color}</p>
            <p>Hair color: {props.info[0].hair_color}</p>
            {
                homeworld && <HomeworldContainer>
                    <h3>Homeworld:</h3>
                    <p>Name: {homeworld.name}</p>
                    <p>Climate: {homeworld.climate}</p>
                    <p>Terrain: {homeworld.terrain}</p>
                    <p>Population: {homeworld.population}</p>
                </HomeworldContainer>
            }

            <Button onClick={props.closeDetails}>Close Details</Button>
        </Container>
    );

}