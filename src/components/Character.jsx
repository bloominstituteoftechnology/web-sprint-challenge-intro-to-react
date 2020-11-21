// Write your Character component here
import React from 'react';

import styled from 'styled-components';
const Character = (props) => {
    let { character } = props
    return (
        <Container>
            <p><Nameplate>{character.name} - {character.status}</Nameplate></p>
            <div><Image src = {character.image}></Image></div>
        </Container>
    )
}
const Container = styled.div`
    margin-bottom: 40px;
`
const Image = styled.img`
    border: solid 8px #8AEB45;
    border-radius: 20px;
`
const Nameplate = styled.p`
    display: inline-block;
    justify-content: center;
    text-align: center;
    background-color:  #8AEB45;
    font-weight: bold;
    padding: 4px;
    margin: 0 auto;
`

export default Character;