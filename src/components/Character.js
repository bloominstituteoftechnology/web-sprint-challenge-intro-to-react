// import { data } from 'msw/lib/types/context'
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
    background-color: gray;
    color: black;
    opacity:0.8
`
const StyledName = styled.h2`
    color: red;
    border-style: outset;
`

const Character = (props) => {
    const {data}=props
    return (
        <StyledCharacter>
        <div className='name'>
            <StyledName>{data.name}</StyledName>
        </div>
        <div className='info'>
            <p>Birth Year: {data.birth_year}</p>
            <p>Height: {data.height}</p>
            <p>Eye Color: {data.eye_color}</p>
            <p>Gender: {data.gender}</p>
            <p>Hair color: {data.hair_color}</p>
            <p>Mass: {data.mass}</p>
            <p>Skin Color: {data.skin_color}</p>
        </div>
        </StyledCharacter>
    )
}

export default Character