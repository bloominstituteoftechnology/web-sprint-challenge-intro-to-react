// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
color: pink;
`

function Character( {eachCharacter}) {
    return (
        <div>
            <Header>Name: {eachCharacter.name}</Header>
            <p>Birth Year: {eachCharacter.birth_year}</p>
            <p>Eye Color: {eachCharacter.eye_color}</p>
            <p>Gender: {eachCharacter.gender}</p>
            <p>Mass: {eachCharacter.mass}</p>

        </div>
    )
}

export default Character
