// Write your Character component here
import React from 'react'

import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const CharacterHolderDiv = styled.div`
display: flex;
margin:10%  15%;
flex-wrap: wrap;
justify-content: space-evenly;
`
const Card = styled.div`
color:${pr => pr.theme.fontColor};
font-weight: ${pr => pr.bold ? 'bold' : 'light'};
h1,h2,h3{
    &:hover{
        transform: scale(1.2);
        opacity: .15;
  animation: ${kf} 5s ease-in-out forwards;
    color: ${pr => pr.theme.hoverColor};
}
}
`



const Character = (props) => {
    const { data } = props
    return (
        <CharacterHolderDiv>
            {data.map((character) => {
                return (
                    <Card>
                        <h1> Name:<br></br> {character.name}</h1>
                        <h2>Birth year:<br></br> {character.birth_year}</h2>
                        <h3>Gender: {character.gender}</h3>
                        <h3>Skin color: {character.skin_color}</h3>
                        <h3>Height: {character.height}</h3>
            
                    </Card>
                )
            })}
            </CharacterHolderDiv>
    )
}


export default Character;
