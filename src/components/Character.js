// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const MyStyled = styled.div`
.databox {
    display:flex;
    justify-content: space-around;
    color: black;
    background-color: white;
    font-size: 1.5vw;
}
    color: gold;
    font-weight: bold;
    border: white 2px solid;
    font-size: 2vw;
`

const data = (props) => {
    const { data } = props

    return (
        <MyStyled>
            <div className="name">
                <h1>{data.name}</h1>
            </div>
            <div className="databox">
                <p>Birth year: {data.birth_year}</p>
                <p>Gender: {data.gender}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Mass: {data.mass}</p>
            </div>
        </MyStyled>
    )
}
export default data