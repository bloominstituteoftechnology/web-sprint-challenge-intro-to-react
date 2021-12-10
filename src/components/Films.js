import React from 'react';
import styled from 'styled-components';

export default function Film(props) {
    const { films } = props;

    const StyledDetails = styled.div`
        margin: 0px 0px 0px 50px;
    `

    return (
        <StyledDetails>
            <p>"{films}"</p>
        </StyledDetails>
    )
}