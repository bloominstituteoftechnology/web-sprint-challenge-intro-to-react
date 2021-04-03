import React from 'react'
import Character from './Character.js'


const Characters = props => {
    const { characters, showCharacterDetails, currentCharacterId } = props;
    return (
        <>
        <div className='characterWrapper'>
            {characters.map((characterObj,index) => {

                return(
                    <Character
                        id={index}
                        key={characterObj.name}
                        details={characterObj}/>
                )})}
                </div>
        <div>Characters</div>
        </>
    )
}
export default Characters