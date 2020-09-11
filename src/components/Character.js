// Write your Character component here
import React from 'react'
import CharacterCards from './CharacterCards'

const Character = props => {
    const{character} = props
    console.log(props)
return(
    <div className = 'container'>
    {character.map(items =>(
        <CharacterCards key = {items.id} cardInfo = {items} />
    ))}
    </div>
)
}

export default Character;