// Write your Character component here
import React from 'react';
import styled from 'styled-components';



const Character = ({character}) => {
    const { data } = character
    return (
        <CharacterSW>
            {data.map((character) => {
                return( 
                    <CharCard>
                        <h1>Name: {character.name}</h1>
                    </CharCard>
                )
            })}
        </CharacterSW>
    )
}

// const Character = ({ character }) => {
//     return(
//         <Card>
//             <h2>Name: {character.name}</h2>
//         </Card>
//     )
// }

export default Character

