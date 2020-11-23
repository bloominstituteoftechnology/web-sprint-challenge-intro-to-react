// Write your Character component here
import React from `react`;
import styled from `styled-components`;
export default Character

const StyleCard = styled.div`
border:
magrin:
width:
`

const StyleDeadcard = styled.p`
color:
font-weight:
`

const Character = (props) => {
    console.log(props);
}

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