import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div `
width: ${prop => prop.theme.cardWidth};
border: ${prop => prop.theme.cardBorder};
margin-bottom: ${prop => prop.theme.cardMargin};
background: #FAFD7CFF;
`
const CardHeader = styled.h1 `
background: ${prop => prop.theme.secondaryColor};
`

const InfoContainer = styled.div `
background: ${prop => prop.theme.primaryColor};
`


const CharacterCards = props => {
    const {cardInfo} = props
    return(
        <CardContainer className = 'cardContainer'>
        <div className = 'card'>
            <CardHeader>{cardInfo.name}</CardHeader>
            <img className= 'characterImg' src = {cardInfo.image} alt='Rick and Morty Character'/>
            <InfoContainer className = 'infoContainer'>
            <p>Species: {cardInfo.species}</p>
            <p>Gender: {cardInfo.gender}</p>
            </InfoContainer>
        </div>
        </CardContainer>
    )
}

export default CharacterCards