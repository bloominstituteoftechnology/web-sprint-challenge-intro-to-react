// Write your Character component here
import React from 'react';
import styled from  'styled-components';
export default function Character(props){
    const {character} =props;
    console.log(`HERE ARE THE RESULTS`, character);
   
    // const names = results.map(resultsObj => {
    //     return (resultsObj.name)
    // })

    const Container = styled.section`
   
    border-style: dashed;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10%;
    margin:2%;
    &:hover{
        background-color: green;
    }
    `;

    return(
        <Container>
        <div>
            {character.name}
        </div>
        <div>
            {character.homeworld}
        </div>

        </Container>
    );
}
