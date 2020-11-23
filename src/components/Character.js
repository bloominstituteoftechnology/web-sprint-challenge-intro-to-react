// Write your Character component here
import React from `react`;
import styled from `styled-components`;


const StyleCard = styled.div`
border:
magrin:
width:
font-size:
color:
padding:
`
const StyledInfo = styled.h2 `
font-size:
color:
`

const StyleData = styled.p`
text-align:
`

const Character = props => {
    const { characterInfo} = props;
}

console.log(characterInfo);

return (
    <StyleCard>
        <img src={props.character.image} alt={props.character.name} />
        <h2>{props.character.name}</h2>
        <p>{props.character.species}</p>
        <p>{props.character.location}</p>
        <StyleDeadcard>{props.character.status}</StyleDeadcard>
        :
<p>{props.character.status}</p>
    </StyleCard>
)


export default Character;