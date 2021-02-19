import React from 'react'
import styled from 'styled-components'
import R2D2 from './images/Artoo.png'

const Card = styled.div`
    border: 1px solid black;
    margin: 1rem;
    padding: 1%;
    background-color:lightgray;
    text-align: left;
    background-image: url(${R2D2});
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: auto 80%;

    /* opacity: 80%; */
`

const FunFacts = styled.p`
    margin: .75rem 1rem;
`

const Stats = props => {
    
    const {info} = props

    return (
        <Card>
            <FunFacts>Height: {info.height}"</FunFacts>
            <FunFacts>Weight: {info.mass} kilos</FunFacts>
            <FunFacts>Eye Color: {info.eye_color}</FunFacts>
        </Card>
    )
}

export default Stats