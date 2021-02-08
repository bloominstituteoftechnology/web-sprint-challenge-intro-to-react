// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledCard = styled.div`
color: white;
background-color: grey;
text-align: center;
align-items: center;
margin-top: 1%;
display: flex;
justify-content: space-evenly;
border: 1px solid black;
`



const Character = (props) => {


return (
    <StyledCard>
        <div>
        <h3>{props.character.name}</h3>
        <img src={props.character.image} alt={props.character.name} />
        <p>Living Status: {props.character.status}</p>
        <p>Species: {props.character.species}</p>
        <p>Gender: {props.character.gender}</p>
        <p>Origin: {props.character.origin}</p>
        <p>Last Seen In: {props.character.location}</p>
        <p>First Appearance: {props.character.episode}</p>
                </div>
    </StyledCard>
    )
}
            

export default Character;