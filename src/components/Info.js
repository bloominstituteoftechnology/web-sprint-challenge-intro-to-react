import React from 'react'
import styled from 'styled-components';

const Information = styled.div`
  padding-bottom: 1rem;
`;

function Info(props) {
  return (

    // imfomation about Characters
    <Information>
      <p><strong>Birth Year: </strong>{props.info.birth_year}</p>
      <p><strong>Gender: </strong>{props.info.gender}</p>
      <p><strong>Height: </strong>{props.info.height}in</p>
      <p><strong>Weight: </strong>{props.info.mass}kg</p>
      <p><strong>Hair Color: </strong>{props.info.hair_color}</p>
      <p><strong>Eye Color: </strong>{props.info.eye_color}</p>
    </Information>
  )
}

export default Info
