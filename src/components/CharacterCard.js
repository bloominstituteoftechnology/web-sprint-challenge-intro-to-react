import React from 'react'
import styled from 'styled-components';
import theme from '../theme/index.js';

const StyledCharacterCard = styled.div`
width: 100%;
border: 5px solid ${theme.primaryColor};
padding-bottom: 5%;
border-radius: 10%;
margin-bottom: 5%;
`
const StyledName = styled.h3`

&:hover {
    color: ${theme.tertiaryColor};
      transform: scale(1.5);
    }

`
const StyledP = styled.p`

&:hover {
    color: ${theme.primaryColor};
      transform: scale(1.2);
    }

`

 const CharacterCard = ({item}) => {
     return (
    <StyledCharacterCard className='card'>
<StyledName>{item.name}</StyledName>
<StyledP> Gender: {item.gender}</StyledP>
<StyledP> Height: {item.height}</StyledP>
<StyledP> Mass: {item.mass}</StyledP>
<StyledP> Birth Year: {item.birth_year}</StyledP>
<StyledP> Eye Color: {item.eye_color}</StyledP>
<StyledP> Hair Color: {item.hair_color}</StyledP>
<StyledP> Mass: {item.mass}</StyledP>
<StyledP> Skin Color: {item.skin_color}</StyledP>
     </StyledCharacterCard>
 )}
    
 export default CharacterCard;
