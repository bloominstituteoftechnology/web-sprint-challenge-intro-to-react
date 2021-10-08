import styled from 'styled-components';
import CharacterCard from './CharacterCard.js'
import theme from '../theme/index.js';

const StyledCharacter = styled.div`
display: flex;
flex-direction:column;
width:60%;
align-items: center;
color: ${theme.secondaryColor};
border-radius: 10%;
`
export default function Character({items}) {

return(
    <StyledCharacter>
     {items.map((item)=>(
        <CharacterCard item = {item} key={item.id}/>
     ))
     }
    </StyledCharacter>
)}