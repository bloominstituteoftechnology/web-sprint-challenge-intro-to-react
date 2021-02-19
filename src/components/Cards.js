import React from 'react'
import styled from 'styled-components'
import Character from './Character'


const CardDiv = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    
`

const Cards = props => {

    const {characters} = props
    console.log(`Did it transfer`, characters)

    return (

        <CardDiv>
            {characters.map(padawan => {
                return (
                    <Character
                        key={padawan.id}
                        person={padawan}
                    />
                )
            })}
            
        </CardDiv>
    )
}

export default Cards