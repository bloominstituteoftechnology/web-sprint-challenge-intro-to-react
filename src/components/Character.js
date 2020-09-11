import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
  opacity: 1;
   background-color: ${pr => pr.alert
    ? pr.theme.secondaryColor
    : pr.theme.primaryColor
  };

  background-color: ${pr => pr.theme.primaryColor};
  border-bottom: 2px ${pr => pr.theme.white};
  color: ${pr => pr.theme.white};
  padding: ${pr => pr.theme.paddingSmall};
  width: 60%;
  display: flex;
  justify-content: space-between;

@media ${pr => pr.theme.mobileBreakpoint} {
  width: initial;
}

transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: ${pr => pr.theme.tertiaryColor};
  }

button {
  color: ${pr => pr.theme.white};
  background-color: ${pr => pr.theme.black};
  transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${pr => pr.theme.black};
    background-color: ${pr => pr.theme.white};
  }
}
`

export default function Character({ info, action }) {
  return (
    <StyledCharacter alert={info.name === 'Luke Skywalker'}>
      {info.name}
      <button onClick={() => action(info.id)}>
        See details
      </button>
    </StyledCharacter>
  )
}
