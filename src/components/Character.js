// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';

export default function Character(props) {
    const { character } = props;
    const [vehicles, setVehicles] = useState([])
    const [starships, setStarships] = useState([])
    const [homeworld, setHomeworld] = useState([])
    useEffect(() => {
        const getData = async (url, set, data) => {
            try {
            const response = await axios.get(url);
            const ApiData = response.data;
            set([...data, ApiData.name])
            } catch (err) {
                throw err;
            }
        }
        character.vehicles.forEach(vehicle => getData(vehicle, setVehicles, vehicles))
        character.starships.forEach(starship => getData(starship, setStarships, starships))
        getData(character.homeworld, setHomeworld, homeworld)
    }, [])

    const StlyedCharacter = styled.li`
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h2, h3, h4 {
            margin: 1rem;
        }
        h2 {
            font-size: 3rem;
        }
    `

    return (
        <StlyedCharacter>
            <h2>{character.name}</h2>
            <h3>Born: {character.birth_year}</h3>
            <ul>
                {character.films.map(film => <li><h4>{film}</h4></li>)}
            </ul>
            <ul>
                {vehicles.map(vehicle => <li><h4>{vehicle}</h4></li>)}
            </ul>
            <ul>
                {starships.map(starship => <li><h4>{starship}</h4></li>)}
            </ul>
            <h3>Home World: {homeworld}</h3>
            {character.gender === "n/a" ? null : <h3>Gender: {character.gender}</h3>}
            <h3>Height: {character.height}</h3>
            <h3>Mass: {character.mass}</h3>
        </StlyedCharacter>
    )
}
