import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div `
width: ${prop => prop.theme.cardWidth};
`


const CharacterCards = props => {
    const {cardInfo} = props
    return(
        <CardContainer className = 'cardContainer'>
        <div className = 'card'>
            <h1>{cardInfo.name}</h1>
            <img className= 'characterImg' src = {cardInfo.image} alt='Rick and Morty Character'/>
            <p>Species: {cardInfo.species}</p>
            <p>Gender: {cardInfo.gender}</p>
        </div>
        </CardContainer>
    )
}

export default CharacterCards