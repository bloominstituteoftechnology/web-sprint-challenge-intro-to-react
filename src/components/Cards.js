import React from 'react';
import CardItem from './CardItem';
import styled from 'styled-components';


const Cards = ({ characters }) => {
    return(
        <StyledCards>
            {characters.map(character => {
                return <CardItem key={character.id} character={character} />
            })}
        </StyledCards>
    )
}
export default Cards;

const StyledCards = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;

`

