// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StarStyle = styled.div`
display:flex;
justify-content:center;
`

const StarStyleBox = styled.div`
margin:10% 15% 0;
background-color:coral;
border: solid black 5px;
border-radius:10%
`
    
const Character = props => {
    const {info} =props
    return (
        <StarStyle>
            <h1>{info.name}</h1>
        </StarStyle>
    )
}


    // return (
    //     <starStyle>
    //     {starData.map(e => {
    //         return (
    //             <starStyleBox>
    //             <h1>{e.name}</h1>
    //             <p>{e.name} was born on {e.birth_year}.</p>
    //             <p>{e.name} is {e.height}cm tall, and is {e.mass}kg. </p>
    //             <p>They were in the movie: {e.films.map(e => <div>{e}</div>)}</p>
    //             </starStyleBox>
    //         )   
    //     })};
    
    //     </starStyle >
    // )

export default Character;