// Write your Character component here
import React from 'react'
import styled from 'styled-components'


export default function createCharacter({eachCharacter}){
    return (
        <div>
    <h1 className = 'Name'>{eachCharacter.name}</h1>    
    <img src = {eachCharacter.image} alt=''/>
    <p className = 'Status'>{eachCharacter.status}</p>
    <p className = 'Species'>{eachCharacter.species}</p>
        </div>
    
    
    )
    
}