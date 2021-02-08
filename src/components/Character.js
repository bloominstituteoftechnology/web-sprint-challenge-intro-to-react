import React from 'react';
import styled from 'styled-components';

const CharacterCards = styled.div`
      background-color: black;
      opacity: 80%;
      color: lightgrey;
      width: 400px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 2%;
      margin-bottom: 5%;
      padding: 4px;
`

const Character = props => {
let {data} = props;

    return(
        <div>
            {data.map(starWars =>{
                return (
                    <CharacterCards>
            <div>
            <h3>Name: {starWars.name}</h3>
            <h3>Gender: {starWars.gender}</h3>
            <h3>Birth Year: {starWars.birth_year}</h3>
            </div>
            </CharacterCards>
                )
})}

        </div>

    )
}
export default Character;