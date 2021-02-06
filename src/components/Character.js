import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    background: #2f313e;
    color: #fff;
    border: 4px solid #383a45;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    flex: 1;
    text-align: left;
    transition: all .2s linear;

    h3 {
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        line-height: 2;
    }

    &:hover {
        cursor: pointer;
        border: 4px solid #d8763a;
        transition: all .2s linear;
    }

    @media(max-width: 1600px) {
        flex: 1 1 30%;
    }
`;

const Character = (props) => {
    const { character } = props;
    return (
        <StyledCharacter>
            <h3>{character.name}</h3>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
        </StyledCharacter>
    );
}

export default Character;