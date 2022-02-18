import React from 'react';
import styled from 'styled-components'

const StyledCharCard = styled.div`
    background-color: lightgray;
    margin: 4%;
    border-radius: 8px;
    box-shadow: 0px 10px 20px 2px #807f7f;
    border: 5px solid white;

    section {
        display: flex;
        justify-content: space-around;
    }

    div {
        border: 3px solid gray;
        background-color: lightslategray;
        border-radius: 8px;
        color: white;
        padding: 0 5%;
        margin: 2% 0 4% 0;
        width: 30%;
    }

    h2 {
        font-size: 2rem;
    }

    .year {
        color: black;
    }

    p {
        font-size: 1.5rem;
        color: lightskyblue;
    }
    
    span {
        color: yellow;
    }
`


export default function CharCard(props) {
    return (
        <StyledCharCard>
            <h2>{props.name}</h2>
            <p className='year'>{props.birthYear}</p>
            <section>
                <div>  
                    <p><span>Gender:</span> {props.gender}</p>
                    <p><span>Height:</span> {props.height}</p>
                    <p><span>Mass:</span> {props.mass}</p>
                </div>
                <div>
                    <p><span>Hair Color:</span> {props.hairColor}</p>
                    <p><span>Skin Color:</span> {props.skinColor}</p>
                    <p><span>Eye Color:</span> {props.eyeColor}</p>
                </div>
            </section>
        </StyledCharCard>
    );
}