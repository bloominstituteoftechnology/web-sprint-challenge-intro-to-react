// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import { Homeworld } from './homeworld'

function Character(props) {
    let keyChain = props.data;

    const IDLine = styled.p ` 
        color: whitesmoke;
        background: rgba(122, 122, 122, 0.1);
        border: 3px solid whitesmoke;
        border-radius: 0.5rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 1rem 3rem;
        padding: 0.2rem;
        font-size: 1.5rem;

        &:hover {
            background: gray;
        }
    `
    return (
        <IDLine>
            <span>{keyChain.name}</span>
            <span>{keyChain.birth_year}</span>
            <Homeworld data={keyChain.homeworld}></Homeworld>
        </IDLine>
    )
}

export {
    Character
}