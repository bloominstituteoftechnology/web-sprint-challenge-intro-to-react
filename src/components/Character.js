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
        color:black;
        background-color: white;
        transform:scale(2);
        transition: all 0.5s ease-in-out;
    }
    `;

    return(
        <Container>
        <div>
            {character.name}
        </div>
        {/* <div>
            {character.homeworld}
        </div> */}
        <div>
            {character.birth_year}
        </div>

        </Container>
    );
}
