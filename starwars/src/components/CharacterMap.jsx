import React from 'react'
import Character from './Character'
import styled from 'styled-components'
function CharacterMap(props) {

    const Container = styled.div `
   
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
    console.log(props)
    return (
        <Container>
            {
                props.data.map((e, index) => {
                    return <Character name={e.name} height={e.height} key={index}/> 
                })
            }
           </Container>    
    )
}

export default CharacterMap
