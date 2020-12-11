import React from 'react';
import styled from 'styled-components';

const CardItem = ({ character }) => {
    return (
        <StyledCard>
            {/* Thumbnail image */}
            <img src = {character.image} alt='Rick and Morty Charcater'/>
            <ul>
    <li>{character.name}</li>
    <li>{character.gender}</li>
    <li>{character.origin.name}</li>
    <li>{character.species}</li>
    <li>{character.status}</li>
            </ul>
        </StyledCard>

    )
}

export default CardItem;

const StyledCard = styled.div`
margin: 10px;
padding: 5px;

img {
  border: 1px solid black; /* Gray border */
  border-radius: 4px;  /* Rounded border */
  padding: 5px; /* Some padding */
  width: 175px; /* Set a small width */
  transition: all 0.2s linear;
};

/* Add a hover effect (blue shadow) */
img:hover {
  transform: scale(1.2);
}

li {
    font-size: 0.8em;
}
`