// Write your Character component here

import React from 'react'

import styled from 'styled-components'

const StyledChar = styled.div`
    p {
        color: ${pr => pr.theme.primaryColor}
    }
    li {
        display:flex;
        justify-content: center;
        color: ${pr => pr.theme.secondaryColor}
    }
`;

function Character(props) {
    const { info } = props

    return (
        <StyledChar>
            <p>Name: {info.name}</p>
            <ul>
                <li>Height: {info.height}</li>
                <li>Mass: {info.mass}</li>
                <li>Hair Color: {info.hair_color}</li>
                <li>Skin Color: {info.skin_color}</li>
                <li>Eye Color: {info.eye_color}</li>
                <li>Birth Year: {info.birth_year}</li>
                <li>Gender: {info.gender}</li>
            </ul>
            {/* <p>{info.name}</p>
            <button onClick={() => action(info.id)}>
                Character Details
            </button> */}
        </StyledChar>
    )

}

export default Character