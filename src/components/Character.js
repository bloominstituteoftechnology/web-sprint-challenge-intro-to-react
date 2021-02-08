import React from 'react'
import styled from 'styled-components'

const CharacterDiv = styled.div`
    background-color: rgba(255,255,255,0.3);
    border-radius: 10px;
    border: 1px solid #FFF;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
    display: flex;
    flex-flow: column wrap;
    padding: 20px;
    text-align: left;
    margin-bottom: 20px;
    max-width: 500px;
    width: 90%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    h2 {
        margin: 0 0 10px 0;
        padding: 0;
    }
    span {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 10px;
}
    ul {
        margin: 0;
        padding: 0;
    }
    ul li {
        background-color: #FFF;
        border-radius: 20px;
        display: inline-block;
        list-style: none;
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 10px 20px;
    }
`;

const Character = ({ data }) => {
    return (
        <CharacterDiv>
            <h2>{ data.name }</h2>
            <span>Stats:</span>
            <ul>
                <li>🤔 { data.height }</li>
                <li>💪 { data.mass }</li>
                <li>🤔 { data.hair_color }</li>
                <li>🤔 { data.skin_color }</li>
                <li>👀 { data.eye_color }</li>
                <li>👶 { data.birth_year }</li>
                <li>{ data.gender === 'n/a' ? '🤖' : data.gender === 'male' ? '🚶‍♂️' : '🚶‍♀️' } { data.gender }</li>
            </ul>
        </CharacterDiv>
    )
}

export default Character
