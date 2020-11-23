// Write your Character component here
import React from `react`;
import styled from `styled-components`;


const Card = styled.div`
border: black 2px dashed;
magrin: 3%;
width: auto;
font-size: 6px;
color: green;
padding: 10px;
`
const StyledInfo = styled.h2 `
font-size: 5px;
color: blue;
`

const StyleData = styled.p`
text-align: center;
`

const Character = props => {
    return (
        <Card>

    {props.characterData.map(character => {
        return(
            <StyledDiv key={character.id}>
            <h2>Name: {character.name}</h2>,
            <p>Species: {character.species}</p>,
            <p>Location: {character.location}</p>,
            <p>First seen in: {character.episode}</p>,
                
            <StyledImg src={character.image} alt={character.name} />
            </StyledDiv>
        )
    })}
    )
}

export default Character;
