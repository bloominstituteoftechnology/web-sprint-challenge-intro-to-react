import React from 'react'
import { Accordion } from 'react-bootstrap';
import Character from './Character.js'
import styled from 'styled-components'

//section styling for character elements
const StyledWrapper = styled.section`
    margin: 10px 250px;
    background: silver;
  `;

const Characters = props => {
    const { characters, currentCharacterId } = props;
    return (
        <div className='container'>
            {/* for each character, return character object*/}
            {characters.map((characterObj,index) => {
                return(
                    <StyledWrapper>
                    <Accordion>
                        <Character
                            key={characterObj.name}
                            name={characterObj.name}
                            id={index}
                            height={characterObj.height}
                            mass={characterObj.mass}
                            hair_color={characterObj.hair_color}
                            eye_color={characterObj.eye_color}
                            skin_color={characterObj.skin_color}
                            species={characterObj.species}
                            currentCharacterId={currentCharacterId}
                            birth_year={characterObj.birth_year}
                            gender={characterObj.gender}
                            homeworld={characterObj.homeworld}
                            films={characterObj.films}
                            vehicles={characterObj.vehicles}
                            starships={characterObj.starships}/>
                    </Accordion>
                    </StyledWrapper>

        )})}
        </div>
    )
}

export default Characters