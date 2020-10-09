// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function Character(props) {
    return (
        <div>
            {props.chData.map(item => {
                return (
                    <div>
                        <h1>{item.name}</h1>
                        <h2>Gender: {item.gender}</h2>
                        <h2>Height: {item.height}</h2>
                        <h2>Hair color: {item.hair_color}</h2>
                        <h2>From planet: {item.homeworld}</h2>
                    </div>
                )
            })}
        </div>
    )
}