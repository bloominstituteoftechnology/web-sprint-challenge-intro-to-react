// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Stats from './Stats'
import R2D2 from './images/Artoo.png'

const Jedi = styled.div`
    border:1px solid black;
    margin: 1% 3%;
    padding: 1rem;
    width: 20%;
    
`
const Birthday = styled.p`
    font-size:1.25rem;
`

const Character = props => {

    const {person} = props
    console.log(`in Character`, person)
    return (
        <Jedi>
            <h1>{person.name}</h1>
            <Birthday><em>Born {person.birth_year}</em></Birthday>
                <Stats info={person}/>
        </Jedi>
    )
    
}

export default Character