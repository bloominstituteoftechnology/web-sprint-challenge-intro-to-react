// Write your Character component here
import React from 'react';
import styled from  'styled-components';
export default function Character(props){
    const {results} =props;
    console.log(`HERE ARE THE RESULTS`, results);
    // {results.map(name => );
    const names = results.map(resultsObj => {
        return (resultsObj.name)
    })

    const Container = styled.section`
   
    border-style: dashed;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10%;
    margin:2%;

    .StarWarsNames{

    }
    `;

    return(
        <Container>
        <div className='StarWarsNames'>
            {names[0]}
        </div>
        <div>
            {names[1]}
        </div>
        <div>
            {names[2]}
        </div>
        <div>
            {names[3]}
        </div>
        <div>
            {names[4]}
        </div>
        <div>
            {names[5]}
        </div>
        </Container>
    );
}
