import React from 'react'
import "bootstrap/dist/css/bootstrap.css";

  const Details = ({characterData}) => {
  return (
    <div className='stats'>
      <h2>Stats:</h2>
          <p>Hair Color: {characterData.hair_color}</p>
          <p>Skin Color: {characterData.skin_color}</p>
          <p>Eye Color: {characterData.eye_color}</p>
          <p>Birth Year: {characterData.birth_year}</p>
          <p>Gender: {characterData.gender}</p>
    </div>
  )
}
export default Details