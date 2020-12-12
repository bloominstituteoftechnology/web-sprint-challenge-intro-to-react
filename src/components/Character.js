// Write your Character component here
import React from 'react'
import styled from 'styled-components'

// function toggleVisibility() {
//   evt.target.display === none 
//   ? evt.target.display = 'block'
//   : 
// }


//styles
const StyledCharacter = styled.div`
  background-color: ${pr => pr.theme.transparentWhite};
  border: 20px double ${pr => pr.theme.primaryColor};
  width: 240px;
  margin: ${pr => pr.theme.margin.large};
  text-align: center;
  h2 {
    font-size: ${pr => pr.theme.font.medium};
    color: ${pr => pr.theme.white};
  }
  
  p {
    margin: 0;
    font-size: {}
    color: ${pr => pr.theme.secondaryColor};
  }
  span {
    font-weight: bold;
  }
  .info {
    margin-bottom: ${pr => pr.theme.margin.large};

  }
  img {
    width: 200px;
    margin: ${pr => pr.theme.margin.large};
  }
`

export default function Character(props) {
  const {character, image} = props;

  return (
    <StyledCharacter>
      <img src={image} alt={character.name}/>
      <h2>{character.name}</h2>
      <div class="info">
        <p><span>Gender: </span>{character.gender}</p>
        <p><span>Birth Year: </span>{character.birth_year}</p>
        <p><span>Eye Color: </span>{character.eye_color}</p>
        <p><span>Hair Color: </span>{character.hair_color}</p>
        <p><span>Skin Color: </span>{character.skin_color}</p>
      </div>
      {/* <button>˅</button> */}
    </StyledCharacter>
  )
}
