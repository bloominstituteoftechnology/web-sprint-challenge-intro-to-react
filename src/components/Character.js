// Write your Character component here

import React from 'react'

import styled from 'styled-components'

const StyledChar = styled.div`
    p {
        color: ${pr => pr.theme.primaryColor}
    }
`;

function Character({ info, action }) {

    return (
        <StyledChar>
            {info.name}
            <button onClick={() => action(info.id)}>
                Character Details
            </button>
        </StyledChar>
    )

}

export default Character