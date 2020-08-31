
import React from 'react'
import styled from 'styled-components'
const Div = styled.div`
 border: solid black 2px;
 width: 50%;


margin-bottom: 1%;
background-color: white;
 
:hover {
    animation-name: spin;
    animation-duration: 1500ms; /* How long lasts 1 turn */
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border: dashed red 4px;
    height: 400px;

    h1 {
        font-size: 100px;
    }
    p {
        font-size: 80px
    }
}
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;



function Character(props) {




    return (
   
        <Div>
           


                <h1>{props.name}</h1>
    <p>{Math.trunc(props.height/12)}ft <strong>tall</strong></p>


            
        </Div>
        


    )
}

export default Character
