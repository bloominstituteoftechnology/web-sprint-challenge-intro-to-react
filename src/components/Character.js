// Write your Character component here
import React from 'react'
import styled from 'styled-components'
import Stats from './Stats'

const Jedi = styled.div`
    border:1px solid black;
    margin: 1rem;
    padding: 1rem;
`


const Character = props => {

    const {person} = props
    console.log(`in Character`, person)
    return (
        <Jedi>
            <h1>{person.name}</h1>
            <p><em>Born {person.birth_year}</em></p>
                <Stats info={person}/>
        </Jedi>
    )
    
}

export default Character