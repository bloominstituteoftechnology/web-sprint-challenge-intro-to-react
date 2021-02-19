import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid black;
    margin: 1rem;
    background-color:lightgray;
    
    /* opacity: 80%; */
`

const FunFacts = styled.p`
    margin: .5rem 1rem;
`

const Stats = props => {
    
    const {info} = props

    return (
        <Card>
            <FunFacts>Height: {info.height}"</FunFacts>
            <FunFacts>Weight: {info.mass} kilos</FunFacts>
        </Card>
    )
}

export default Stats