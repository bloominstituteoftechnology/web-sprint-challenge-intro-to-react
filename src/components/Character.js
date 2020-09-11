// Write your Character component here
import React from 'react'
import CharacterCards from './CharacterCards'
import styled from 'styled-components'



const Container = styled.div `
display: ${prop => prop.theme.cardFlex};
flex-wrap: ${prop => prop.theme.cardWrap};
justify-content: ${prop => prop.theme.cardSpacing};
`

const Character = props => {
    const{character} = props
    console.log(props)
return(
    <Container className = 'container'>
    {character.map(items =>(
        <CharacterCards key = {items.id} cardInfo = {items} />
    ))}
    </Container>
)
}

export default Character;