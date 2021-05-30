import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
color:black;
display:block;
text-align:center;
margin:20%
display:flex;
justify-content:space-between;
align-items: center;
border:3px solid orange;
padding:0px 20px;
font-weight: bold;
font-size: 20px;
`

export default function CharacterInfo(props) {
    const { characterInfo, close } = props

    return (
        <StyledCharacter>
            <p>{characterInfo.name}</p>
            <p>Gender:{characterInfo.gender}</p>
            <p>Birthday:{characterInfo.birth_year}</p>
            <p>Starred In:{characterInfo.films.join(', ')}</p>
            <p>Home World:{characterInfo.homeworld}</p>
            <button onClick={close}>Close</button>
        </StyledCharacter>
    )
}