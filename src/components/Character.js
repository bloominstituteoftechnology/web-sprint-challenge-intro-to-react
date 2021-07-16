// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from "axios";
import styled from 'styled-components';
import UrlList from './UrlList';
import { v4 as uuid } from "uuid";

export default function Character(props) {
    const { character } = props;
    const [visible, setVisible] = useState(false)
    const [homeworld, setHomeworld] = useState("")
    useEffect(() => {
        const getHomeWorld = (url) => {
            axios.get(url)
                .then(res => res.data)
                .then(data => setHomeworld(data.name))
                .catch(err => console.log(err))
        }
        getHomeWorld(character.homeworld)
    }, [])

    const StlyedCharacter = styled.li`
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: ${props => props.theme.color} 5px solid;
        border-radius: 1rem;
        margin: 1rem auto;
        padding: 2rem;
        color: ${props => props.theme.color};
        .character-details {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        h2, h3, h4 {
            margin: 1rem;
        }
        h2 {
            cursor: pointer;
            font-size: 3rem;
            position: relative;
            &::after {
                content: "";
                position: absolute;
                background-color: ${props => props.theme.color};
                left: 0;
                right: 0;
                bottom: 0;
                height: 3px;
                transition-duration: 300ms;
                transform: scaleX(0);
            }
            &:hover::after {
                transform: scaleX(1);
            }
        }
        h3 {
            font-size: 2rem;
        }
        ul {
            display: flex;
            align-items: baseline;
            justify-content: flex-start;
            flex-wrap: wrap;
            li {
                font-size: 1.5rem;
                padding: 1rem;
            }
        }
    `

    return (
        <StlyedCharacter>
            <h2 className="btn"
            onClick={() => setVisible(!visible)}>{character.name}</h2>
            {visible ?
            <div className="character-details">
                <h3>Born: {character.birth_year}</h3>
                    <h3>Films: </h3>
                <ul>
                    {character.films.map(film => <li>{film}</li>)}
                </ul>
                <UrlList urls={character.vehicles} title="Vehicles" key={uuid()} />
                <UrlList urls={character.starships} title="Starships" key={uuid()} />
                <h3>Home World: {homeworld}</h3>
                {character.gender === "n/a" ? null : <h3>Gender: {character.gender}</h3>}
                <h3>Height: {character.height}cm</h3>
                <h3>Mass: {character.mass}kg</h3>
            </div> : null}
        </StlyedCharacter>
    )
}
