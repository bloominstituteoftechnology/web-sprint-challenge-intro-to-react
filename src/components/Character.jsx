import React from 'react'
import Character from './Character'
import styled from 'styled-components'

const CharactersList = (props) => {
    console.log(props)

    const Section = styled.section `
        display: flex;
        flex-wrap: wrap;
        `

    return(
        <section>
            {
                props.characters.map((character, index) => (
                   <Characeter key ={`Character-${character.name}-${index}`}
                   character ={character}/>

                ))
            }
        </section>
    )


}

export default CharactersList