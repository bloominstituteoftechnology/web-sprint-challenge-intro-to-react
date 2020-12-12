// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'


const kf = keyframes` // used for animations!
  100% {
    opacity: 1;
  }
`

const StyledFriend = styled.div`
  opacity: 0;
  animation: ${kf} 0.5s ease-in-out forwards; // used with keyframe!
  color: 'red';
  font-weight:${pr => pr.bold ? 'bold' : 'initial'};
  width: 60%;
  display: flex;
  justify-content: space-between;

  button {
    color:${pr => pr.theme.tertiaryColor};
    &:hover {
      transform: scale(1.5); // cheap for performance
      transition: all 0.3s ease-in-out; // added
    }
    transition: all 0.3s ease-in-out;
  }
  &:hover { // & represents the div
    color:${pr => pr.theme.secondaryColor};
    background-color: cyan;
    transition: all 0.4s ease-in-out;
  }
  transition: all 0.4s ease-in-out;

  @media (max-width: 550px) {
    width:100%;
  }
` 

export default function Friend({bold, info, action }) {
    return (
      <StyledFriend bold={bold} danger={info.name ==='Bea'}>
        {info.name}
        <button onClick={() => action(info.id)}>
          See details
        </button>
      </StyledFriend>
    )
  }