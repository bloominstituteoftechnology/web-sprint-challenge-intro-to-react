
import React from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
    width: 80%;
    margin: 1.5rem auto;
    background-color: #a9a9a9;
    display: flex;
    border: 4px solid #4a86e8;
    justify-content: center;
    box-shadow: 8px 8px 3px #000;
    ul {
        list-style: none;
    }
    h2 {
        color: #5a7670;
        font-size: 2.5rem;
        font-weight: bolder;
    }
    p {
        color: #3137fd;
        font-size: 1.5rem;
        font-weight: bold;
    }
`

// Write your Character component here
export default function Character(props) {
    return (
        <>
            {props.charName.map((e) => {
                return <CardMaker key={e.name} char={e} />
            })}
        </>
    )
}

const CardMaker = ({ char }) => {
    return (
        <CardDiv>
            <ul>
                <li>
                    <h2>Character Name: {char.name}</h2>
                    <p>Birth Year: {char.birth_year}</p>
                    <p>Gender: {char.gender}</p>
                    <p>Hair Color: {char.hair_color}</p>
                </li>
            </ul>
        </CardDiv>
    )
}