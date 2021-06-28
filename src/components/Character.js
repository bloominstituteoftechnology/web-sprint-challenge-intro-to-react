// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const Character = (props) => {
    console.log(props)

    //adding style
    const Section = styled.section`
        color: hotpink;
        display: flex;
        justify-content: center;
        &:hover {text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;}
        //border: 1px solid black;
        // width: 20%;
        margin: 0 auto;
        // border-radius: 1rem;
    
    `;

return (
    <div>
        {
            props.characters.map(character => (
              <Section>
                <h2>{character.name}</h2>
              </Section>
            ))
        }
    </div>
)

}

export default Character