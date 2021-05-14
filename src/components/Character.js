import React from "react";

import styled from 'styled-components';

const StyledCharacter = styled.div`
  background-color: grey;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1% 2%;
  width: 60%;
  text-align: center;
`

const Character = props => {
    const { info } = props
    return (
        <StyledCharacter>
            <h1>{info.name}</h1>
        </StyledCharacter>
    );
};

export default Character;

