import React from "react";

import styled from 'styled-components';

const StyledCharacter = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid grey;
  border-radius: 10px;
  text-align: center;
  margin: 5% 1px;
`
const CharHeader = styled.h1`
    margin: 10px 0;
    font-size: 2rem;
`

const Character = props => {
    const { info } = props
    return (
        <StyledCharacter>
            <CharHeader>{info.name}</CharHeader>
        </StyledCharacter>
    );
};

export default Character;

