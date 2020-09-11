import React from 'react'

const CharacterCards = props => {
    const {cardInfo} = props
    return(
        <div className = 'cardContainer'>
            <div className = 'characterName'>
                {cardInfo.name}
            </div>
            <div>
            <img className= 'characterImg' src = {cardInfo.image} alt='Rick and Morty Character'/>
            </div>
            <div className = 'otherInfo'>
                <p>Species: {cardInfo.species}</p>
                <p>Gender: {cardInfo.gender}</p>
            </div>
        </div>
    )
}

export default CharacterCards