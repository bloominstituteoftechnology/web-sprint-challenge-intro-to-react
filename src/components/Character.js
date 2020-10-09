// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledChar = styled.div`
    background: grey;
    height: 20vh;
    margin: 4% auto;
    
    :hover {
        transform: scale(1.2);
        transition: 0.25s ease-in-out;
    }
    transition: 0.25s ease-in-out;
    width: 75%;
     p {
        font-size: 2rem;
        padding-top: 5%;
        color: #f7f7f7;
    }

`

 const Character = (props) => {


    return (
        <StyledChar>
            <p>
            { `Name:  ${ props.data.name}  |  Height:  ${ props.data.height}  |  Mass:  ${ props.data.mass}  |  Hair Color:  ${ props.data.hair_color}  |  Skin Color:  ${ props.data.skin_color}`}
            </p>
        </StyledChar>
    )
}

export default Character;


