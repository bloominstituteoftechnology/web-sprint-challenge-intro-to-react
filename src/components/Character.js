// Write your Character component here

import React from 'react'

import styled from 'styled-components'

const StyledChar = styled.div`
    p {
        color: ${pr => pr.theme.primaryColor}
    }
`;

function Character(props) {
    const { name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender } = props

    return (
        <StyledChar>
            <p>Name: {name}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Skin Color: {skinColor}</p>
            <p>Eye Color: {eyeColor}</p>
            <p>Birth Year: {birthYear}</p>
            <p>Gender: {gender}</p>
        </StyledChar>
    )

}

export default Character