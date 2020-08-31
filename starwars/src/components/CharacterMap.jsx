import React from 'react'
import Character from './Character'
import styled from 'styled-components'
function CharacterMap(props) {





    console.log(props)
    return (
       <div>
            {
                props.data.map((e, index) => {
                    return <h1>Test</h1>
                })
            }
            </div>
     
    )
}

export default CharacterMap
