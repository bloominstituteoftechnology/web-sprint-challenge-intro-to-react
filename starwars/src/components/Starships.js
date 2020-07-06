import React from 'react'
import styled from "styled-components";

const StarBox = styled.div`
    border-top: 2px solid #33FF33;
    margin-top: 40px;
    margin-left: 50px;
    margin-right: 50px;
`;

const StarInfo = styled.p` 
font-size: 16px;
margin: 5px;
color: #33FF33;
`;

const StarshipComponent = ({ starship }) => {
    return (
        <StarBox>
            <h1>{starship.name}</h1>
            <StarInfo>{starship.model}</StarInfo>
            <StarInfo>{starship.manufacturer}</StarInfo>
            <StarInfo>{starship.hyperdrive_rating}</StarInfo>
            <StarInfo>{starship.starship_class}</StarInfo>
        </StarBox>
    )
}

export default StarshipComponent;
