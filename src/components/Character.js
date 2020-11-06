// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    border: 2px solid green;
    margin: 2% auto;
    
`

const Character = ({ character }) => {
//   const { character } = props;
console.log({character})

  return(
    <Section>
        <div>{character.name}</div>
        <p>{character.birth_year}</p>
                
    </Section>

      
    );
};

export default Character;
